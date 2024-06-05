import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8888/login', { email, password });
      const { role } = res.data;

      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isAuthenticated', 'true');

      if (role === 'admin') {
        navigate('/backend');
      } else {
        navigate('/app');
      }
    } catch (err) {
      setError(err.response.data.message || "An error occurred during login.");
      console.error(err);
    }
  };

  return (
    <section className="section-login">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2 className="title-login">Log in To Your Account</h2>
            <div className="inputbox">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="inputbox">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
              />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>
            <div className="forget">
              <span>Forget your password?</span>
            </div>
            <button type="submit" className="login-btn">Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <div className="register">
            <p>
              Don't have an account?
              <Link to="/register"><span> Sign Up</span></Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
