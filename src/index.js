import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/atoms/header";
import Footer from "./components/atoms/footer";
import ViewItemPage from "./components/pages/viewItemPage";
import Notfound from "./components/atoms/notfound";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div className="app">
      <Header />
      <div className="primary-wrapper">
        <Switch>
          <Route exact path="/" component={ViewItemPage} />
          <Route component={Notfound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
