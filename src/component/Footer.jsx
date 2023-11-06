import React from 'react';
// import logos_instagram from '../assets/logos_instagram.png';
import FSAVE from '../assets/FSAVE.png';
import logos_facebook from '../assets/logos_facebook.png';
import logos_telegram from '../assets/logos_telegram.png';
import AppleLogo from '../assets/AppleLogo.png';
import google_play from '../assets/google_play.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="div1">
      <div className='div1a'>
        <img src={FSAVE} alt="FSAVE" />
        <h4>CONTACT</h4>
        <p>+234 (90) 8349-0000</p>
        <button>Contact Us</button>
      </div>

      <div className='div1b'>
        <h4>COMPANY</h4>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>FAQs</li>
          <li>Gallery</li>
        </ul>
      </div>

      <div className="div1c">
        <h4>PRODUCT</h4>
        <ul>
          <li>Community</li>
          <li>Business Expert</li>
          <li>Trust Lawyer</li>
          <li>Trust Doctor</li>
        </ul>
      </div>

      <div className="div1d">
        <h4>FOLLOW US</h4>
        <h4><img src={logos_facebook.png} alt="" />Facebook</h4>
        {/* <h4><img src={logos_instagram.png.png} alt="" />Instagram</h4> */}
        <h4><img src={logos_telegram.png} alt="" />Join Our Telegram</h4>
      </div>
      </div>

      <div className="div2">
        <div className="div2a">
        <h4>OFFICE ADDRESS</h4>
        <p>THE ENTREPRENEURSHIP VILLAGE, Parliament Road, beside Shoprite,
           opppsite International Conference Centre, Akure, Ondo State, Nigeria.</p>
        </div>
        <div className="div2b">
          <h4>PRIVACY</h4>
          <ul>
            <li>Bye-Laws</li>
            <li>Privacy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>

      <div className="div3">
        <button className='btn1'>
          <div><img src={AppleLogo} alt="apple" /></div>
          <p>Download on the <br />APP STORE</p>
        </button>
        <button className='btn2'>
          <div><img src={google_play} alt="GooglePlay" /></div>
          <p>Download on the <br />APP STORE</p>
        </button>
      </div>
    </div>
  );
}

export default Footer;
