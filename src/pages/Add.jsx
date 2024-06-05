import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/form.css';

const Add = () => {
  const [product, setProduct] = useState({
    image: null,
    price: '',
    name: '',
    description: '',
    stock: '',
    category: '',
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProduct((prev) => ({ ...prev, image: files[0] }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', product.image);
    formData.append('price', product.price);
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('stock', product.stock);
    formData.append('category', product.category);

    try {
      await axios.post('http://localhost:8888/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/backend');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        required
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        name="stock"
        onChange={handleChange}
        required
      />
      <p>Category</p>
      <select
        name="category"
        onChange={handleChange}
        required
        className="w-1/2"
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
        required
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/backend">See all Products</Link>
    </div>
  );
};

export default Add;
