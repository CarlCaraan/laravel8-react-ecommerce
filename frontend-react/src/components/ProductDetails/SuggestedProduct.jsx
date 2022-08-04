import React, { Component, Fragment } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import classes from "./SuggestedProduct.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";

class SuggestedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);

    let subcategory = this.props.subcategory;
    axios
      .get(AppURL.SimilarProduct(subcategory))
      .then((response) => {
        this.setState({
          ProductData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const SuggestedLists = this.state.ProductData;
    if (SuggestedLists.length > 0) {
      const MyView = SuggestedLists.map((SuggestedList, i) => {
        if (SuggestedList.special_price === "na") {
          return (
            <Col
              key={i.toString()}
              className="mb-2 p-1"
              xl={2}
              lg={2}
              md={2}
              sm={4}
              xs={6}
            >
              <Link
                className="custom-links"
                to={"/productdetails/" + SuggestedList.id}
              >
                <Card className="card-product">
                  <Card.Img
                    variant="top"
                    src={SuggestedList.image}
                    alt="3b-button-3"
                  />
                  <Card.Body>
                    <span className="card-product-title">
                      {SuggestedList.title}
                    </span>
                    <br />
                    <span className="card-product-price">
                      ₱{SuggestedList.price}
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
              className="mb-2 p-1"
              xl={2}
              lg={2}
              md={2}
              sm={4}
              xs={6}
            >
              <Link
                className="custom-links"
                to={"/productdetails/" + SuggestedList.id}
              >
                <Card className="card-product">
                  <Card.Img
                    variant="top"
                    src={SuggestedList.image}
                    alt="3b-button-3"
                  />
                  <Card.Body>
                    <span className="card-product-title">
                      {SuggestedList.title}
                    </span>
                    <br />
                    <span className="card-product-price">
                      ₱{SuggestedList.special_price}
                    </span>
                    <br />
                    <strike className="card-product-discount">
                      ₱{SuggestedList.price}
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
          <div className={`${classes["suggested-container"]}`}>
            <Container className="px-3">
              <h2 className="section-header">You may also like</h2>
              {/* Start Product Card */}
              <div className="mx-2">
                <Row>{MyView}</Row>
              </div>
              {/* End Product Card */}
            </Container>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className={`${classes["suggested-container"]}`}>
            <Container className="px-3">
              <h2 className="section-header">You may also like</h2>
              {/* Start Product Card */}
              <div className="mx-2">
                <Row>There is no similar product.</Row>
              </div>
              {/* End Product Card */}
            </Container>
          </div>
        </Fragment>
      );
    }
  }
}

export default SuggestedProduct;
