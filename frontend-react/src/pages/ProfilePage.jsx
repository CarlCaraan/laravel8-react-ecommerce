import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Profile from "../components/common/Profile";

class ProfilePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const User = this.props.user;

    return (
      <Fragment>
        <NavMenuDesktop />
        <Profile user={User} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProfilePage;
