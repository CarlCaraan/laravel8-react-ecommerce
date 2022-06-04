import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Notification from "../components/Notification/Notification";

class NotificationPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Notification />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default NotificationPage;
