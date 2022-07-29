import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import ResetPassword from "../components/common/ResetPassword";

class ResetPasswordPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <ResetPassword />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ResetPasswordPage;
