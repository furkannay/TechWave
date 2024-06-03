import React from "react";
import Typewriter from "./title";
import './companyname.css';
import Logo from "./logo2.gif"; // Logo bileşeninin import edildiğini varsayalım

const Header = () => {
  return (<div className="header-container2">
    <div className="header-container">
      <img src={Logo} alt="WebWizards Studios-logo" className="Header-Logo" />
      <div className="welcome-text">
        <h1>Welcome to</h1>
        <h1><Typewriter text="WebWizards Studios" delay={100} /></h1>
      </div>
    </div>
  </div>
  );
};

export default Header;