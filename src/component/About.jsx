import React from "react";
import FSAVE from "../assets/FSAVE.png";
import Abouteam from "../assets/Abouteam.png";
import Aboutlap from "../assets/Aboutlap.png";
import Lighton from "../assets/Lighton.png";
import Goal from "../assets/Goal.png";
import Creativity from "../assets/Creativity.png";
import UserGroups from "../assets/UserGroups.png";
import Warranty from "../assets/Warranty.png";
import Work from "../assets/Work.png";
import { Link } from "react-router-dom";
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Telegram from '../assets/Telegram.png'
import AppleLogo from '../assets/AppleLogo.png';
import google_play from '../assets/google_play.png';
 
const About = () => {
  return (
    <div className="trust">
      <div className="navbar-lists">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={FSAVE} alt="FSAVE" className="fsave" />
        </Link>
        <ul className="nav">
          <li className="bar">
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              className="btn"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} className="btn">
              WHAT WE OFFER
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} className="btn">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} className="btn">
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/signUp"
              style={{ textDecoration: "none" }}
              className="btn-one"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              style={{ textDecoration: "none" }}
              className="btn-two"
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
 
      <div>
        <img src={Abouteam} alt="Abouteam" className="abouteam" />
      </div>
 
      <div className="about-container">
        <div className="about-container-one">
          <h3>About Us</h3>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur. Ut at sed tempus leo
            condimentum eu congue ut. Vitae nequ
            <br />e accumsan in quis vel tincidunt eget mi vitae. Sce
            <br />
            lerisque neq viverra tempor neque malesuada phar
            <br />
            etra. Sed congue mauris id dictum hac arcu eget faucibus. Enim est
            aliquet mi nibh at.
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur. Ut at sed tempus leo
            condimentum eu congue ut. Vitae nequ
            <br />e accumsan in quis vel tincidunt eget mi vitae. Sce
            <br />
            lerisque neq viverra tempor neque malesuada phar
            <br />
            etra. Sed congue mauris id dictum hac arcu eget faucibus. Enim est
            aliquet mi nibh at.
          </p>
        </div>
        <div className="about-container-two">
          <img src={Aboutlap} alt="Aboutlap" className="aboutlap" />
        </div>
      </div>
 
      <div className="mission-container">
        <div className="mission">
          <img src={Goal} alt="Goal" className="goal" />
          <h3 className="vision-text">
            OUR <span className="mission-textt">MISSION</span>
          </h3>
          <p className="mission-text">
            Empowering Communities through
            <br />
            Compassion Services.
          </p>
        </div>
        <div className="vision">
          <img src={Lighton} alt="Lighton" className="lighton" />
          <h3 className="vision-text">
            OUR <span className="vision-textt">VISION</span>
          </h3>
          <p className="vision-text">Creating a better Tommorrow.</p>
        </div>
      </div>
 
 
      <div className="value-section">
        <div className="value">
          <h3 className="value-text">
            OUR <span>VALUE</span>
          </h3>
        </div>
 
        <div className="value-container">
 
          <div className="card-1">
            <div className="card-one">
              <img src={UserGroups} alt="UserGroups" className="usergroups" />
              <h4>Teamwork</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Volutpat bibendum neque
                amet aenean ut neque pellentesque.
              </p>
            </div>
 
            <div className="card-two">
              <img src={Work} alt="Work" className="work" />
              <h4>Responsiility</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Volutpat bibendum neque
                amet aenean ut neque pellentesque.
              </p>
            </div>
          </div>
 
          <div className="card-2">
            <div className="card-three">
              <img src={Creativity} alt="Creativity" />
              <h4>Innovation</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Volutpat bibendum neque
                amet aenean ut neque pellentesque.
              </p>
            </div>
 
            <div className="card-four">
              <img src={Warranty} alt="Warranty" className="warranty" />
              <h4>Excellent</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Volutpat bibendum neque
                amet aenean ut neque pellentesque.
              </p>
            </div>
          </div>
 
        </div>
      </div>
 
 
      <div className="get-in-touch">
        <h3>GET IN TOUCH</h3>
        <h4>Leave us a mesage</h4>
        <div className="form">
 
          <div className="form-text">
 
            <div className="form-box">
              <label className="name-text">Name</label><br /><br />
              <input type="text" className="input-text" /><br /><br /><br />
            </div>
 
            <div className="form-box2">
              <label className="email-text">Email Address</label><br /><br />
              <input type="text" /><br /><br />
            </div>
 
            <div className="form-box3">
              <label className="message-text">Message</label><br />
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
 
            <div className="send-btn">
              <button>Send</button>
            </div>
 
          </div>
 
        </div>
      </div>
 
 
      <div className='footer'>
        <div className="div1">
          <div className='div1a'>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={FSAVE} alt="FSAVE" className="fsave" />
            </Link>
            <h4 className="office-text">CONTACT</h4>
            <p>+234 (90) 8349-0000</p>
            <button className="btn-contact">Contact Us</button>
          </div>
 
          <div className='div1b'>
            <h4>COMPANY</h4>
            <ul className="about">
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Gallery</li>
            </ul>
          </div>
 
          <div className="div1c">
            <h4>PRODUCT</h4>
            <ul className="about">
              <li>Community</li>
              <li>Business Expert</li>
              <li>Trust Lawyer</li>
              <li>Trust Doctor</li>
            </ul>
          </div>
 
          <div className="div1d">
            <h4>FOLLOW US</h4>
            <ul className="about">
              <li><img src={Facebook} alt="" className="face" />Facebook</li>
              <li><img src={Instagram} alt="" className="face" />Instagram</li>
              <li><img src={Telegram} alt="" className="face" />Join Our Telegram</li>
            </ul>
          </div>
        </div>
 
        <div className="div2">
          <div className="div2a">
            <h4 className="office-text">OFFICE ADDRESS</h4>
            <p className="shoprite-text">THE ENTREPRENEURSHIP VILLAGE, Parliament Road, beside Shoprite,
              opppsite International Conference Centre, Akure, Ondo State, Nigeria.</p>
          </div>
          <div className="div2b">
            <h4>PRIVACY</h4>
            <ul className="about">
              <li>Bye-Laws</li>
              <li>Privacy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
 
        </div>
 
        <div className="div3">
 
          <a href="https://www.apple.com/app-store/"
            style={{ textDecoration: 'none', color: '#FFFFFF' }} className="btn1">
            <div>
              <img src={AppleLogo} alt="apple" />
            </div>
 
            <div className="btn-text">
              <p className="download-text">Download on the</p>
              <p className="app-text">APP STORE</p>
            </div>
 
          </a>
 
          <a href="https://play.google.com/store/apps?hl=en&gl=US"
            style={{ textDecoration: 'none', color: '#FFFFFF' }} className="btn2">
            <div>
              <img src={google_play} alt="GooglePlay" />
            </div>
 
            <div className="btn-text">
              <p className="get-text">GET IT ON</p>
              <p className="goggle-text">Google Play</p>
            </div>
          </a>
 
        </div>
 
      </div>
 
 
    </div>
  );
};
 
export default About;
 