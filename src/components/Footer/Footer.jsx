import React, { Component } from "react";
import { Link } from "gatsby";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="resources">
          <h3>Resources</h3>
          <Link>Terms & Conditions</Link>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>contact@jingles.com</p>
          <a href="https://www.jarboestudios.com/" target="_blank">Designed and coded at Jarboe Studios</a>
          <p>All Right Reserves &copy;2018</p>
        </div>
      </footer>
    );
  }
}
