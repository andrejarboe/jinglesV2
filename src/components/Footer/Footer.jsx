import React, { Component } from "react";
import { Link } from "gatsby";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="footer-container">
          
          <div className="footer-logo">
            <h2>Jingles</h2>
            <p>Your slogan here.</p>
          </div>
        <div className="site-map">
          <h3>Site Map</h3>
          <Link to="/">Products</Link>
          <Link to="/">About</Link>
          <Link to="/">FAQ</Link>
          <Link to="/contact">
            Request a quote
          </Link>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>contact@jingles.com</p>

        </div>
        <div className="copy-right">
        <a href="https://www.jarboestudios.com/" target="_blank">
            Designed and coded at Jarboe Studios
          </a>
          <p>All Right Reserves &copy; 2018</p>
        </div>

          </div>
      </footer>
    );
  }
}
