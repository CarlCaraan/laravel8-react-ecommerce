import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
