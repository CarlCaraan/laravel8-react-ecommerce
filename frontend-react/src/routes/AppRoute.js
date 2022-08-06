import React, { Component, Fragment } from "react";
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
import axios from "axios";
import AppURL from "../api/AppURL";

class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.UserData)
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {});
  }

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <Fragment>
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
            render={(props) => (
              <UserLoginPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => <UserRegisterPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/forgotpassword"
            render={(props) => (
              <ForgotPasswordPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/resetpassword/:id"
            render={(props) => (
              <ResetPasswordPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <ProfilePage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
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
            render={(props) => (
              <ProductDetailsPage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/notification"
            render={(props) => <NotificationPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/favourite"
            render={(props) => (
              <FavoritePage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )}
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
      </Fragment>
    );
  }
}

export default AppRoute;
