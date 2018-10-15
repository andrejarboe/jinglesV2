import React, { Component } from "react";
import { Link } from "gatsby";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/">
              <h2>Jingles</h2>
              <p>The best Jingles in your city!</p>
            </Link>
          </div>
          <div className="site-map">
            <h3>Site Map</h3>
            <Link to="/">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/">FAQ</Link>
            <Link to="/contact">Request a quote</Link>
          </div>
          <div className="contact">
            <Link to="/contact">
              <h3>Contact</h3>
              <p>contact@jingles.com</p>
            </Link>
          </div>
        </div>
        <div className="copy-right container">
          <a href="https://www.jarboestudios.com/" target="_blank">
            Designed and coded at Jarboe Studios
          </a>
          <p>All Right Reserves &copy; 2018</p>
        </div>
      </footer>
    );
  }
}
