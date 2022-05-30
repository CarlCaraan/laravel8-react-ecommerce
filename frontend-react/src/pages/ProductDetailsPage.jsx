import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import ProductDetails from "../components/ProductDetails/ProductDetails";

class ProductDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <ProductDetails />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProductDetailsPage;
