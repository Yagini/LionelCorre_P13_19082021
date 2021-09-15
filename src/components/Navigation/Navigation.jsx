import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

import "./Navigation.css";

import Logo from "../../assets/argentBankLogo.png";
import { useSelector } from "react-redux";

/**
 * The navigation check if any user is log or not to manage the display
 * @returns render
 */
function Navigation() {  
  const user = useSelector((state) => state.user.user);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="index-sr-only">Argent-bank</h1>
      </Link>
      {!user ? (
        <>
          <Link className="main-nav-item main-nav-item-link" to="/login">
            <FaUserCircle className="main-nav-icon" />
            Sign In
          </Link>
        </>
      ) : (
        <div className="main-nav-item ">
          <FaUserCircle className="main-nav-icon" />
          <p className="main-nav-name">{user.firstName}</p>
          <Link className="main-nav-item main-nav-item-link" to="/">
            <FaSignOutAlt className="main-nav-icon" />
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
