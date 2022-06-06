import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Favorite from "../components/Favorite/Favorite";

class FavoritePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Favorite />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default FavoritePage;
