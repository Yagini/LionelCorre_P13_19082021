import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import "./Navigation.css";

import Logo from "../../assets/argentBankLogo.png";

function Navigation() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" exact to="/">
        <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="index-sr-only">Argent-bank</h1>
      </Link>
      <Link className="main-nav-item" to="/login">
        <FaUserCircle className="main-nav-icon" />
        Sign In
      </Link>
    </nav>
  );
}

export default Navigation;
