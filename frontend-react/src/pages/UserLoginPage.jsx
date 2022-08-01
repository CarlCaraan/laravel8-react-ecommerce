import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import UserLogin from "../components/common/UserLogin";

class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const setUser = this.props.setUser;
    const user = this.props.user;

    return (
      <Fragment>
        <NavMenuDesktop />
        <UserLogin setUser={setUser} user={user} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default UserLoginPage;
