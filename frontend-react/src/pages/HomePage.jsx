import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Campaign from "../components/home/Campaign";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Herosection from "../components/home/Herosection";
import NewArrival from "../components/home/NewArrival";
import axios from "axios";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }
  GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch();
  };

  render() {
    return (
      <Fragment>
        <Campaign />
        <NavMenuDesktop />
        <Herosection />
        <FeaturedProducts />
        <Categories />
        <NewArrival />
        <Collection />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default HomePage;
