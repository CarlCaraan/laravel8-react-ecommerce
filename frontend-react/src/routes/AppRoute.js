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
import SearchPage from "../pages/SearchPage";
import UserRegisterPage from "../pages/UserRegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Start All Auth Route */}
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword/:id" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* End All Auth Route */}

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route
            path="/productdetails/:code"
            element={<ProductDetailsPage />}
          />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/favourite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/productcategory/:category"
            element={<ProductCategoryPage />}
          />
          <Route
            path="/productsubcategory/:category/:subcategory"
            element={<ProductSubCategoryPage />}
          />
          <Route path="/productbysearch/:searchkey" element={<SearchPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
