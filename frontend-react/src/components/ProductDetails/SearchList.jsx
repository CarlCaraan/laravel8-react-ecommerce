import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchList extends Component {
  render() {
    const SearchProductLists = this.props.ProductData;
    const SearchKey = this.props.SearchKey;
    const MyView = SearchProductLists.map((SearchProductList, i) => {
      if (SearchProductList.special_price === "na") {
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
              to={"/productdetails/" + SearchProductList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={SearchProductList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {SearchProductList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    ₱{SearchProductList.price}
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
              to={"/productdetails/" + SearchProductList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={SearchProductList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {SearchProductList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    ₱{SearchProductList.special_price}
                  </span>
                  <br />
                  <strike className="card-product-discount">
                    ₱{SearchProductList.price}
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
        <Container className="mt-5 mb-5">
          <h2 className="section-header">Search Results for: "{SearchKey}"</h2>

          {/* Start Product Card */}
          <div className="mx-2">
            <Row>{MyView}</Row>
          </div>
          {/* End Product Card */}
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default SearchList;
