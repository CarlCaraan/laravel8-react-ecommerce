import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import ForgotPassword from "../components/common/ForgotPassword";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class ForgetPasswordPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <ForgotPassword />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ForgetPasswordPage;
