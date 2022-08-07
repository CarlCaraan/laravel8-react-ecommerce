import React, { Component, Fragment } from "react";
import Cart from "../components/Cart/Cart";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class CartPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <NavMenuDesktop />
        <Cart user={User} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default CartPage;
