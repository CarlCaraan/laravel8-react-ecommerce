import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} key={Date.now()} />}
        />

        {/* Start All Auth Route */}
        <Route
          exact
          path="/login"
          render={(props) => <UserLoginPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <UserRegisterPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/forgotpassword"
          render={(props) => <ForgotPasswordPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/resetpassword/:id"
          render={(props) => <ResetPasswordPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => <ProfilePage {...props} key={Date.now()} />}
        />
        {/* End All Auth Route */}

        <Route
          exact
          path="/contact"
          render={(props) => <ContactPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/about"
          render={(props) => <AboutPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/privacy"
          render={(props) => <PrivacyPage {...props} key={Date.now()} />}
        />
        <Route
          path="/productdetails/:code"
          render={(props) => <ProductDetailsPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/notification"
          render={(props) => <NotificationPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/favourite"
          render={(props) => <FavoritePage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/cart"
          render={(props) => <CartPage {...props} key={Date.now()} />}
        />
        <Route
          exact
          path="/productcategory/:category"
          render={(props) => (
            <ProductCategoryPage {...props} key={Date.now()} />
          )}
        />
        <Route
          exact
          path="/productsubcategory/:category/:subcategory"
          render={(props) => (
            <ProductSubCategoryPage {...props} key={Date.now()} />
          )}
        />
        <Route
          exact
          path="/productbysearch/:searchkey"
          render={(props) => <SearchPage {...props} key={Date.now()} />}
        />

        <Route
          path="*"
          render={(props) => <NotFoundPage {...props} key={Date.now()} />}
        />
      </Switch>
    );
  }
}

export default AppRoute;
