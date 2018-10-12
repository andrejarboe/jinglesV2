import React from "react";
import { Helmet } from "react-helmet";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

import "../css/layout.css";

const Layout = ({ children }) => (
  <div>
    <Helmet>
    <script defer src="https://use.fontawesome.com/releases/v5.4.1/js/all.js" integrity="sha384-L469/ELG4Bg9sDQbl0hvjMq8pOcqFgkSpwhwnslzvVVGpDjYJ6wJJyYjvG3u8XW7" crossorigin="anonymous"></script>
    </Helmet>
    <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          {/* <Navbar /> */}
        </div>
        <div className="main">{children}</div>
      </div>
      {/* <Footer /> */}
    </div> 

  </div>
);

export default Layout;
