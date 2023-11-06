import React from 'react';
import { Link } from "react-router-dom";
import FSAVE from '../assets/FSAVE.png';
import logimg from '../assets/logimg.png';
import google from '../assets/google.png';
import { useState } from "react";
 
const CreateAccount = () => {
 
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
  });
 
  const handleAgree = () => {
    setAgreed(!agreed);
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const validateForm = () => {
    const newErrors = {};
 
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required.';
    }
    if (formData.surname.trim() === '') {
      newErrors.surname = 'Surname is required.';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email address is required.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number.';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
    }
    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    } else {
      alert("Form submitted successfully!", formData);
      handleChange.value = " ";
    }
 
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
  };
 
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
 
  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
    } else {
      alert('please agree to the terms and condition before proceed.')
    }
 
 
 
    if (validateForm()) {
      console.log('Form submitted:', formData);
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
 
      <div className="sign">
        <div className='create'>
 
          <div className='create-image'>
            <img src={logimg} alt="logimg" className='logimg' />
          </div>
 
          <div className='signup-page'>
            <h2 className='signup-page-heading'>Create an account</h2>
 
            <div className='account'>
              <p>Already have an account?</p>
              <Link to="/signUp" style={{ textDecoration: 'none', color: '#50C9F9' }} className='log'>Login</Link><br />
            </div>
 
            <form className='form' onSubmit={handleSubmit}>
 
              <div>
                <label className='label'>First Name</label><br />
                <input type="text" placeholder='First Name' name='firstName' value={formData.firstName}
                  onChange={handleChange} className='input' /><br /><br />
              </div>
              {errors.firstName && <span className="error">{errors.firstName}</span>}
 
              <div>
                <label className='label'>Surname</label><br />
                <input type="text" placeholder='Surname' className='input' name='surname' value={formData.surname}
                  onChange={handleChange} /><br /><br />
              </div>
              {errors.surname && <span className="error">{errors.surname}</span>}
 
              <div>
                <label className='label'>Email Address</label><br />
                <input type="text" placeholder='Email address' className='input' name='email' value={formData.email}
                  onChange={handleChange} /><br /><br />
              </div>
              {errors.email && <span className="error">{errors.email}</span>}
 
              <div>
                <label className='label'>Phone number</label><br />
                <input type="number" placeholder='Phone Number' className='input' name='phoneNumber' value={formData.phoneNumber}
                  onChange={handleChange} /><br /><br />
              </div>
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
 
              <div>
                <label className='label'>Password</label><br />
                <input type="text" placeholder='Password' className='input' name='password' value={formData.password}
                  onChange={handleChange} /><br /><br />
              </div>
              {errors.password && <span className="error">{errors.password}</span>}
 
              <div>
                <label className='label'>Confirm password</label><br />
                <input type="text" placeholder='Confirm Password' className='input' name='confirmPassword' value={formData.confirmPassword}
                  onChange={handleChange} /><br /><br />
              </div>
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
 
              <div>
                <label className='label'>Referral code</label><br />
                <input type="text" placeholder='Referral Code' className='input' name='referralCode' value={formData.referralCode}
                  onChange={handleChange} /><br />
                {errors.referralCode && <span className="error">{errors.referralCode}</span>}
 
                <input type="checkbox" checked={agreed} onChange={handleAgree} /><span className="agreement-text"> I agree to MyTrustNetwork
                <Link to="/terms"  target="_blank" style={{ textDecoration: 'none', color: '#50C9F9',  }}
                 className='btn-term'>Terms of Use & Private Policy.</Link><br /><br />   </span>
 
              </div>
 
              <button type="submit" className='signin-btn' disabled={!agreed}> Create account</button>
              <p className='or'>or</p>
              <button type="submit" className='google'> <img src={google} alt="google_play" /> Sign up with Google</button>
            </form>
          </div>
 
        </div>
      </div>
    </div>
  );
}
 
export default CreateAccount;
 