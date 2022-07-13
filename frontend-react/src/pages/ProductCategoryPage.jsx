import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Category from "../components/ProductDetails/Category";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProductCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: this.props.match.params.category,
      ProductData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    // alert(this.state.Category);
    axios
      .get(AppURL.ProductListByCategory(this.state.Category))
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
        <Category
          Category={this.state.Category}
          ProductData={this.state.ProductData}
        />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default withRouter(ProductCategoryPage);
