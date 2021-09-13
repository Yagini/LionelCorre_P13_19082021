import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

import "./Navigation.css";

import Logo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../_actions/actions";


function Navigation() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch
  const handleLogout = () => {       
    dispatch(userActions.logout());    
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="index-sr-only">Argent-bank</h1>
      </Link>
      {!isAuthenticated ? (
        <>
          <Link className="main-nav-item" to="/login">
            <FaUserCircle className="main-nav-icon" />
            Sign In
          </Link>
        </>
      ) : (
        <div className="main-nav-item">
          <FaUserCircle className="main-nav-icon" />
          <p className="main-nav-name">blabla-actif</p>
          <Link className="main-nav-item" to="/" onClick={handleLogout}>
            <FaSignOutAlt className="main-nav-icon" />
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
