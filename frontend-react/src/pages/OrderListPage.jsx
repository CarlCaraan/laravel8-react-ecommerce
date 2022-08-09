import React, { Component, Fragment } from "react";
import OrderList from "../components/Cart/OrderList";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class OrderListPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <OrderList />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default OrderListPage;
