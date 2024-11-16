import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo placeat ipsam, delectus dolores at. </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91-2545458569</li>
            <li>demo@gmail.com</li>
          </ul>
        </div>

        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
