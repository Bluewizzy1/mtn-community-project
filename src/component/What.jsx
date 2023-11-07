import React from 'react';
import { Link } from "react-router-dom";
import FSAVE from '../assets/FSAVE.png'
 
const What = () => {
  return (
    <div className='trust'>
      <div className='navbar-lists'>
        <Link to="/" style={{ textDecoration: 'none' }} >
          <img src={FSAVE} alt="FSAVE" className='fsave' />
        </Link>
        <ul className="nav">
          <li className="bar">
            <Link to="/about" style={{ textDecoration: 'none' }}  className="btn">ABOUT US</Link>
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
      <div>
      <h3>
                What We Offer Page
            </h3>
            </div>
    </div>
 
  );
}
 
export default What;






