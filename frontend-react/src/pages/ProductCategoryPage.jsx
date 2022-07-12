import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Category from "../components/ProductDetails/Category";

class ProductCategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      Category: match.params.category,
      ProductData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    alert(this.state.Category);
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Category />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProductCategoryPage;
