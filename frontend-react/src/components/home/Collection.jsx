import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("COLLECTION"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const CollectionList = this.state.ProductData;
    const MyView = CollectionList.map((CollectionList, i) => {
      if (CollectionList.special_price === "na") {
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
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={CollectionList.image}
                alt="3b-button-3"
              />
              <Card.Body>
                <span className="card-product-title">
                  {CollectionList.title}
                </span>
                <br />
                <span className="card-product-price">
                  ₱{CollectionList.price}
                </span>
              </Card.Body>
            </Card>
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
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={CollectionList.image}
                alt="3b-button-3"
              />
              <Card.Body>
                <span className="card-product-title">
                  {CollectionList.title}
                </span>
                <br />
                <span className="card-product-price">
                  ₱{CollectionList.special_price}
                </span>
                <br />
                <strike className="card-product-discount">
                  ₱{CollectionList.price}
                </strike>
                <span className="card-product-discount-percent"> -71%</span>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="mb-5">
          <h2 className="section-header">Just For You</h2>

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

export default Collection;
