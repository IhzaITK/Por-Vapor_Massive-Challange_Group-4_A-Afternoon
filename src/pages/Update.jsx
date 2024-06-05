import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../css/form2.css';

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    image: null,
    price: '',
    name: '',
    description: '',
    stock: '',
    category: '',
  });
  const [changedFields, setChangedFields] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct((prev) => ({ ...prev, image: files[0] }));
      setChangedFields((prev) => ({ ...prev, image: files[0] }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
      setChangedFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in changedFields) {
      if (key === "image" && changedFields[key]) {
        formData.append(key, changedFields[key]);
      } else {
        formData.append(key, changedFields[key]);
      }
    }

    try {
      await axios.put(`http://localhost:8888/products/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/backend");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={product.name}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleChange}
        value={product.description}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
        value={product.price}
      />
      <input
        type="number"
        placeholder="Stock"
        name="stock"
        onChange={handleChange}
        value={product.stock}
      />
      <p>Category</p>
      <select
        type="text"
        name="category"
        onChange={handleChange}
        className="w-1/2"
        value={product.category}
      >
        <option value="">Select a category</option>
        <option value="Liquid">Liquid</option>
        <option value="Vape">Vape</option>
        <option value="Coil">Coil</option>
        <option value="Kapas">Kapas</option>
        <option value="Mod">Mod</option>
        <option value="Pod">Pod</option>
        <option value="Catridge">Catridge</option>
      </select>
      <input
        type="file"
        placeholder="Image"
        name="image"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && <p>Something went wrong!</p>}
      <Link to="/backend">See all Products</Link>
    </div>
  );
};

export default UpdateProduct;
