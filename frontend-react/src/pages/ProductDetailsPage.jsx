import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import ProductDetailsLoading from "../components/PlaceHolder/ProductDetailsLoading";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Code: this.props.match.params.code,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetails(this.state.Code))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    const User = this.props.user;
    if (this.state.mainDiv === "d-none") {
      return (
        <Fragment>
          <NavMenuDesktop />
          <ProductDetailsLoading isLoading={this.state.isLoading} />
          <FooterDesktop />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <NavMenuDesktop />
          <ProductDetails user={User} data={this.state.ProductData} />
          <FooterDesktop />
        </Fragment>
      );
    }
  }
}

export default withRouter(ProductDetailsPage);
