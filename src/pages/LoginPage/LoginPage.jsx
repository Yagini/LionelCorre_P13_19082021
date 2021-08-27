import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { userService } from "../../services/userService";

import "./LoginPage.css";

function LoginPage() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    userService.login(userName, password);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} value={userName} />
            <div className="input-username-error"></div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <div className="input-password-error"></div>
          </div>
          <div className="input-remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
