import React from "react";
import { FaUserCircle } from "react-icons/fa";

import "./LoginPage.css"

function LoginPage() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>
              Username
              <input type="text" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Password
              <input type="password" />
            </label>
          </div>
          <div className="input-remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
