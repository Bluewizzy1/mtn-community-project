import React from 'react';
import { Link } from "react-router-dom";
import FSAVE from '../assets/FSAVE.png';
import google from '../assets/google.png';
import loginimg from '../assets/logimg.png'
import { useState } from "react";
// import { GoogleLogin } from 'react-google-login';
 
const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 

  const validateForm = () => {
    const newErrors = {};
 
    if (formData.email.trim() === '') {
      newErrors.email = 'Email address is required.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
    }else {
      alert("Login successfully!", formData);
      handleChange.value = " ";
    }
 
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
  };
 
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      console.log('Login Successfully:', formData);
    }
  };
 
  return (
    <div className='trust'>
      <div className='navbar-lists'>
        <Link to="/" style={{ textDecoration: 'none' }} >
          <img src={FSAVE} alt="FSAVE" className='fsave' />
        </Link>
        <ul className="nav">
          <li className="bar">
            <Link to="/about" style={{ textDecoration: 'none' }} className="btn">ABOUT US</Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }} className="btn">WHAT WE OFFER</Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }} className="btn">BLOG</Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }} className="btn">FAQs</Link>
          </li>
          <li>
            <Link to="/signUp" style={{ textDecoration: 'none' }} className='btn-one'>Sign In</Link>
          </li>
          <li>
            <Link to="/create" style={{ textDecoration: 'none' }} className='btn-two'>Create Account</Link>
          </li>
        </ul>
      </div>
 
      <div className="login-main">
        <div className='login'>
 
          <div className='login-image'>
            <img src={loginimg} alt="loginimg" className='loginimg' />
          </div>
 
          <div className='signup-page'>
            <h2 className='signup-page-heading'>Login</h2>
            <div className='account'>
              <p>Not yet a member?</p>
              <Link to="/create" style={{ textDecoration: 'none', color: '#50C9F9' }} className='log'>Register here</Link><br />
            </div>
 
            <form className='form' onSubmit={handleSubmit}>
 
              <div>
                <label className='label'>Email Address</label><br /><br />
                <input type="text" placeholder='Email address' className='input' name='email' value={formData.email}
                  onChange={handleChange}/><br /><br /><br />
              </div>
              {errors.email && <span className="error">{errors.email}</span>}
 
              <div>
                <label className='label'>Password</label><br /><br />
                <input type="text" placeholder='Password' className='input' name='password' value={formData.password}
                  onChange={handleChange}/><br /><br /><br /><br />
              </div>
              {errors.password && <span className="error">{errors.password}</span>}
 
              <Link to="/dashboard" type="submit"style={{ textDecoration: 'none' }} className='signin-btnn'>Log In</Link><br /><p className='or'>or</p>
              <button type="submit" className='google'> <img src={google} alt="google_play" /> Sign up with Google</button>
            </form>
 
          </div>
 
 
        </div>
      </div>
 
 
    </div>
  );
}
 
export default Signin;