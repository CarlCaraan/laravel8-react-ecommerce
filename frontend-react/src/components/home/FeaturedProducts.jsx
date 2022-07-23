import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./FeaturedProducts.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import FeaturedLoading from "../PlaceHolder/FeaturedLoading";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("SALE"))
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
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((FeaturedList, i) => {
      if (FeaturedList.special_price === "na") {
        return (
          <Col
            key={i.toString()}
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
            className={this.state.mainDiv}
          >
            <Link
              className="custom-links"
              to={"/productdetails/" + FeaturedList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={FeaturedList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {FeaturedList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    ₱{FeaturedList.price}
                  </span>
                  <br /> <br />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            key={i.toString()}
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
            className={this.state.mainDiv}
          >
            <Link
              className="custom-links"
              to={"/productdetails/" + FeaturedList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={FeaturedList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {FeaturedList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    ₱{FeaturedList.special_price}
                  </span>
                  <br />
                  <strike className="card-product-discount">
                    ₱{FeaturedList.price}
                  </strike>
                  <span className="card-product-discount-percent"> -71%</span>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container>
          {/* Start Three Section Button */}
          <div className="my-4">
            <Row className="px-1">
              <Col className="mb-1 px-2" xl={4} lg={6} md={6} sm={6} xs={12}>
                <button className={`${classes["three-section-button"]} w-100`}>
                  <img
                    className="rounded-circle shadow-sm me-2"
                    src={require("../../assets/images/home/3b-button-1.png")}
                    alt="3b-button-1"
                    width="30px"
                  />
                  Load & eStore
                </button>
              </Col>
              <Col className="mb-1 px-2" xl={4} lg={6} md={6} sm={6} xs={12}>
                <button className={`${classes["three-section-button"]} w-100`}>
                  <img
                    className="rounded-circle shadow-sm me-2"
                    src={require("../../assets/images/home/3b-button-2.png")}
                    alt="3b-button-2"
                    width="30px"
                  />
                  LazMall
                </button>
              </Col>
              <Col className="mb-1 px-2" xl={4} lg={6} md={6} sm={6} xs={12}>
                <button className={`${classes["three-section-button"]} w-100`}>
                  <img
                    className="rounded-circle shadow-sm me-2"
                    src={require("../../assets/images/home/3b-button-3.png")}
                    alt="3b-button-3"
                    width="30px"
                  />
                  Vouchers
                </button>
              </Col>
            </Row>
          </div>
          {/* End Three Section Button */}

          <h2 className="section-header">Flash Sale</h2>
          <div className="bg-white">
            {/* Start Flash Sale Product Headings */}
            <div className="px-3 pt-2">
              <Row>
                <Col>
                  <p className="section-subheader mt-2">On Sale Now</p>
                </Col>
                <Col>
                  <button className={`${classes["sale-button"]}`}>
                    SHOP ALL PRODUCTS
                  </button>
                </Col>
              </Row>
            </div>
            {/* End Flash Sale Product Headings */}

            <hr className="mt-0" />

            {/* Start Product Card */}
            <Row className="mb-3 pb-3">
              {/* Start Skeleton Loading PlaceHolder */}
              <FeaturedLoading isLoading={this.state.isLoading} />
              {/* Start Skeleton Loading PlaceHolder */}
              {MyView}
            </Row>
            {/* End Product Card */}
          </div>
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default FeaturedProducts;
