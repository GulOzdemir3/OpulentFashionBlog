import React from "react";
import "../styles/contact.css"
import "../styles/layout.css"
import NavBar from "./Nav.js"
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="grid-container">
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="main-content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;