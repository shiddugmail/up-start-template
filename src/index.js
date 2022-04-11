import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import "./style.module.css";
import Home from "./views/home";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Navbar} path="/navbar" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
