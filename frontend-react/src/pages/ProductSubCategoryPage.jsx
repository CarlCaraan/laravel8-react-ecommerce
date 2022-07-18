import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import SubCategory from "../components/ProductDetails/SubCategory";
import Herosection from "../components/home/Herosection";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProductSubCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: this.props.match.params.category,
      SubCategory: this.props.match.params.subcategory,
      ProductData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    // alert(this.state.Category);
    // alert(this.state.SubCategory);
    axios
      .get(
        AppURL.ProductListBySubCategory(
          this.state.Category,
          this.state.SubCategory
        )
      )
      .then((response) => {
        this.setState({
          ProductData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Herosection />
        <SubCategory
          Category={this.state.Category}
          SubCategory={this.state.SubCategory}
          ProductData={this.state.ProductData}
        />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default withRouter(ProductSubCategoryPage);
