import React, { Component, Fragment } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
