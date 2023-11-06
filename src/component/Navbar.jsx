import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import FSAVE from "../assets/FSAVE.png";
// import handshakee from "../assets/handshakee.png";
import Rectangle from "../assets/Rectangle.png";
import Medical from "../assets/Medical.png";
import Team from "../assets/Team.png";
import Books from "../assets/Books.png";
import Ellipsee from "../assets/Ellipsee.png";
import Ellipse from "../assets/Ellipse.png";
import Polygon from "../assets/Polygon.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Telegram from "../assets/Telegram.png";
import AppleLogo from "../assets/AppleLogo.png";
import google_play from "../assets/google_play.png";

const Navbar = () => {
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

      <div className="community">
        <div className="hero">
          <div>
            <h2 className="trust-text">
              My Trust Network; A <br /> Platform For <br />{" "}
              <span className="services-text">Community Services.</span>
            </h2>
          </div>
          <div>
            <p className="trustt-text">
              A community-based website that
              <br />
              allows users to transact within a <br /> Trusted Community.
              <br />
              <br />
            </p>
          </div>
          <div>
            <li>
              <Link
                to="/create"
                style={{ textDecoration: "none" }}
                className="btn-twwo"
              >
                Create Account
              </Link>
            </li>
          </div>
        </div>

        <div className="hero2">
          <img
            src={"assets/handshakee.png"}
            alt="FSAVE"
            className="handshake"
          />
          <h2 className="you">
            I TRUST <span className="you-text">YOU</span>
          </h2>
        </div>
      </div>

      <div className="what-we-offer">
        <h3 className="what-text">
          What <span className="you-text">We</span> Offer
        </h3>
        <div className="what-we-offer-containers">
          <div className="first-what-we-offer-container">
            <div className="what-we-offer-one">
              <img src={Rectangle} alt="FSAVE" className="rectangle" />
              <h2 className="serve-text">Community Services</h2>
              <p className="serve-text">
                It has survived not only five centuries, but also the <br />{" "}
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularisedin the 1960s with.
              </p>
              <button className="bot">Join Community</button>
            </div>
            <div className="what-we-offer-two">
              <img src={Medical} alt="FSAVE" className="medical" />
              <h2 className="serve-text">Medical Services</h2>
              <p className="serve-text">
                It has survived not only five centuries, but also the <br />{" "}
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularisedin the 1960s with.
              </p>
              <button className="bot">Learn More</button>
            </div>
          </div>
          <div className="second-what-we-offer-container">
            <div className="what-we-offer-three">
              <img src={Team} alt="FSAVE" className="team" />
              <h2 className="serve-text">Business Services</h2>
              <p className="serve-text">
                It has survived not only five centuries, but also the <br />{" "}
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularisedin the 1960s with.
              </p>
              <button className="bot">Learn More</button>
            </div>
            <div className="what-we-offer-four">
              <img src={Books} alt="FSAVE" className="books" />
              <h2 className="serve-text">Legal Services</h2>
              <p className="serve-text">
                It has survived not only five centuries, but also the <br />{" "}
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularisedin the 1960s with.
              </p>
              <button className="bot">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <h2 className="test-test">Testimonial</h2>
        <div className="test">
          <div className="boy">
            <img src={Ellipsee} alt="Ellipse" className="ellipse" />
            <p className="test-para">
              It has survived not only five centuries, but also <br />
              the leap into electronic typesetting, remaining <br /> essentially
              unchanged. It was popularisedin.{" "}
            </p>
            <img src={Polygon} alt="Polygon" className="polygon" />
            <h3 className="testa-para">GOKE.A</h3>
          </div>
          <div className="girl">
            <img src={Ellipse} alt="Ellipse" className="ellipse" />
            <p className="test-para">
              It has survived not only five centuries, but also <br /> the leap
              into electronic typesetting, remaining <br /> essentially
              unchanged. It was popularisedin.
            </p>
            <h3 className="testt-para">ANITA MELODY</h3>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="div1">
          <div className="div1a">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={FSAVE} alt="FSAVE" className="fsave" />
            </Link>
            <h4 className="office-text">CONTACT</h4>
            <p>+234 (90) 8349-0000</p>
            <button className="btn-contact">Contact Us</button>
          </div>

          <div className="mobile-con">
            <div className="div1b">
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
                <li>
                  <img src={Facebook} alt="" className="face" />
                  Facebook
                </li>
                <li>
                  <img src={Instagram} alt="" className="face" />
                  Instagram
                </li>
                <li>
                  <img src={Telegram} alt="" className="face" />
                  Join Our Telegram
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="div2">
          <div className="div2a">
            <h4 className="office-text">OFFICE ADDRESS</h4>
            <p className="shoprite-text">
              THE ENTREPRENEURSHIP VILLAGE, Parliament Road, beside Shoprite,
              opppsite International Conference Centre, Akure, Ondo State,
              Nigeria.
            </p>
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
          <a
            href="https://www.apple.com/app-store/"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            className="btn1"
          >
            <div>
              <img src={AppleLogo} alt="apple" />
            </div>

            <div className="btn-text">
              <p className="download-text">Download on the</p>
              <p className="app-text">APP STORE</p>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps?hl=en&gl=US"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            className="btn2"
          >
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

export default Navbar;
