import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import "./App.css";

import Homepage from "../../pages/Homepage/Homepage";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
