import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userActions } from "../../_actions/actions";

import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hasToken = useSelector((state) => state.authentication.token);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(userActions.login(email, password));    
  };

  if (hasToken) {
    dispatch(userActions.getUser());
    return <Redirect to="/profile" />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            {submitted && !email && <div className="input-error">Username is required</div>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            {submitted && !password && <div className="input-error">Password is required</div>}
          </div>
          <div className="input-remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <input className="sign-in-button" type="submit" value="Sign In" />
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
