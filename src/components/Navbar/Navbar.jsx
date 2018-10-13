import React, { Component } from "react";
import { Link } from "gatsby";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar container">
          <div className="logo">
            <Link to="/">
              <h1>Jingles</h1>
            </Link>
          </div>
          <div className="links">
            <Link to="/">Products</Link>
            <Link to="/">About</Link>
            <Link to="/">FAQ</Link>
            <Link className="nav-btn" to="/contact">Request a quote</Link>
          </div>
        </div>
      </nav>
    );
  }
}
