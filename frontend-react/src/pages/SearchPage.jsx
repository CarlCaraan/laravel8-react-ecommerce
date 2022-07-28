import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import Herosection from "../components/home/Herosection";
import SearchList from "../components/ProductDetails/SearchList";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchKey: this.props.match.params.searchkey,
      ProductData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductBySearch(this.state.SearchKey))
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
        <SearchList
          SearchKey={this.state.SearchKey}
          ProductData={this.state.ProductData}
        />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default withRouter(SearchPage);
