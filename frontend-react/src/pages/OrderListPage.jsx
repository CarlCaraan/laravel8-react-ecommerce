import React, { Component, Fragment } from "react";
import OrderList from "../components/Cart/OrderList";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class OrderListPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <NavMenuDesktop />
        <OrderList user={User} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default OrderListPage;
