import React, { Component, Fragment } from "react";
import Campaign from "../components/home/Campaign";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Herosection from "../components/home/Herosection";
import NewArrival from "../components/home/NewArrival";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Campaign />
        <Herosection />
        <FeaturedProducts />
        <Categories />
        <NewArrival />
        <Collection />
      </Fragment>
    );
  }
}

export default HomePage;
