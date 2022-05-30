import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
