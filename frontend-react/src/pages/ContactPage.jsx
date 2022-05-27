import React, { Component, Fragment } from "react";
import Contact from "../components/common/Contact";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Contact />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ContactPage;
