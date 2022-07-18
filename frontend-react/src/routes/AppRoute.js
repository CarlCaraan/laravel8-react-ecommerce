import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import NotificationPage from "../pages/NotificationPage";
import FavoritePage from "../pages/FavoritePage";
import CartPage from "../pages/CartPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/ProductSubCategoryPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="*" element={<NotFoundPage />} />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/privacy" element={<PrivacyPage />} />
          <Route
            exact
            path="/productdetails"
            element={<ProductDetailsPage />}
          />
          <Route exact path="/notification" element={<NotificationPage />} />
          <Route exact path="/favourite" element={<FavoritePage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route
            exact
            path="/productcategory/:category"
            element={<ProductCategoryPage />}
          />
          <Route
            exact
            path="/productsubcategory/:category/:subcategory"
            element={<ProductSubCategoryPage />}
          />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
