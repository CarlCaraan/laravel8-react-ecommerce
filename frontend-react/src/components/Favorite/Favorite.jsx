import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Breadcrumb, Button } from "react-bootstrap";
import classes from "./Favorite.module.css";

class Favorite extends Component {
  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              Favourite
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        <div className="bg-white pt-5 pb-5">
          <Container>
            <h2 className="section-header">My Favourite Items</h2>

            {/* Start Product Card */}
            <div className="mx-2">
              <Row>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={2}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/8126efc945c1d305acefcb33349bf8ae.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={3}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={4}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={5}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={5}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={6}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                      <div className="float-end">
                        <Button className={`${classes["custom-button"]}`}>
                          <i className="fas fa-heart"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            {/* End Product Card */}
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Favorite;
