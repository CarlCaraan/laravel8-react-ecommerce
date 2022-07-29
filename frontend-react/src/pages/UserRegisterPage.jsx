import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import UserRegister from "../components/common/UserRegister";

class UserRegisterPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <UserRegister />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default UserRegisterPage;
