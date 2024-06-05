import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/backendadmin.css"; // Ensure this is only used here
import { FaTable } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8888/products');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Header />
    <div className="main-content">
      <h1>Manage Products</h1>
      <button className="add-button">
        <Link to="/add" style={{ color: 'inherit', textDecoration: 'none' }}>
          + Add Products
        </Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name Product</th>
            <th>Product Price</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <img 
                  src={`http://localhost:8888${product.image}`} 
                  style={{ height: 50, width: 50 }} 
                  alt={product.name} 
                />
              </td>            
              <td>
                <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
                <button className="edit-button">
                  <Link to={`/update/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Edit
                  </Link>
                </button>
                <button className="details-button">
                  <Link to={`/detail/${product.id}`}>Details</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
