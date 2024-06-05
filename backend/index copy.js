import express from "express";
import mysql from "mysql2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db = mysql.createConnection({
  host: 'localhost',
  port: 8080,  // Ensure your MySQL port is correct
  user: 'root',
  password: 'root',
  database: 'ecommerce',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("No token provided!");

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(500).json("Failed to authenticate token.");
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

app.get('/', (req, res) => {
  res.json('hello');
});

app.get('/products', (req, res) => {
  const q = 'SELECT * FROM products';
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const q = 'SELECT * FROM products WHERE id = ?';
  db.query(q, [productId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data[0]);
  });
});

app.post('/products', upload.single('image'), (req, res) => {
  const q = 'INSERT INTO products (`image`, `price`, `name`, `description`) VALUES (?)';

  const values = [
    req.file ? `/uploads/${req.file.filename}` : null,
    req.body.price,
    req.body.name,
    req.body.description,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/products/:id', upload.single('image'), (req, res) => {
  const productId = req.params.id;
  const q = 'UPDATE products SET image=?, price=?, name=?, description=? WHERE id=?';

  const values = [
    req.file ? `/uploads/${req.file.filename}` : req.body.image,
    req.body.price,
    req.body.name,
    req.body.description,
    productId,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const q = 'DELETE FROM products WHERE id = ?';

  db.query(q, [productId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/register", async (req, res) => {
  const { username, password, email, date } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const q = "INSERT INTO users (`username`, `password`, `role`, `birth`, `email`) VALUES (?, ?, 'user', ?, ?)";
  db.query(q, [username, hashedPassword, date, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.status(200).json("User has been created.");
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const user = data[0];
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json("Wrong email or password!");

    const token = jwt.sign({ id: user.id, role: user.role }, "jwtSecretKey", { expiresIn: '1h' });
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({ message: "Login successful", token, role: user.role });
  });
});

app.get("/api/auth/me", verifyToken, (req, res) => {
  const q = "SELECT * FROM users WHERE id = ?";
  db.query(q, [req.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const user = data[0];
    res.status(200).json({ id: user.id, username: user.username, email: user.email, role: user.role });
  });
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("access_token").status(200).json({ message: "Logout successful" });
});

app.listen(8888, () => {
  console.log("Connected to backend.");
});
