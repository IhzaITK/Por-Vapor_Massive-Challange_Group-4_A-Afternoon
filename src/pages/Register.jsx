import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "", email: "", birth: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:8888/register", credentials);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong!";
      console.log(err);
      setError(errorMessage);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <>
      <section className="register-section">
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2 className="register-title">Register Your New Account</h2>
              <div className="inputbox">
                <label htmlFor="username" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="birth" className="label">
                  Birth Date
                </label>
                <input 
                  type="date" 
                  id="birth" 
                  name="birth" 
                  placeholder="Birth Date" 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                />
                <span className="password-eye">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
              <button className="register-btn" onClick={handleClick}>Create Account</button>
              {error && <p className="error-message">{error}</p>}
            </form>
            <div className="register">
              <p>
                Already have an account?
                <Link to="/"><span> Log In</span></Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
