import React from "react";
import { Helmet } from "react-helmet";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import "./layout.css";

const Layout = ({ children }) => (
  <div>
    {/* <Helmet>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400"
        rel="stylesheet"
      />
    </Helmet>
    <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          <Navbar />
        </div>
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div> */}

    {children}
  </div>
);

export default Layout;
