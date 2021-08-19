import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "../../pages/Homepage/Homepage";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
