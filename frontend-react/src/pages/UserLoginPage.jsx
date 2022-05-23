import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import UserLogin from "../components/common/UserLogin";
import Campaign from "../components/home/Campaign";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <UserLogin />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default HomePage;
