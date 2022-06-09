import React, { Component, Fragment } from "react";
import {
  Container,
  Breadcrumb,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import classes from "./Cart.module.css";

class Cart extends Component {
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
              My Cart
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Cart Section */}
        <div className={`${classes["cart-container"]} py-5`}>
          <Container>
            <Row>
              <Col xl={9} lg={9} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Header className="bg-white p-0">
                    <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                      My Cart
                    </h1>
                  </Card.Header>
                  <Card.Body>
                    {/* Start Product List */}
                    <Row>
                      <Col xl={2} lg={3} md={12} sm={12}>
                        <img
                          className={`${classes["product-image"]}`}
                          src="https://ph-live.slatic.net/p/5d06e3914395b4e093e535e26e7d95d7.jpg"
                          alt="product1"
                          width="100px"
                        />
                      </Col>
                      <Col xl={6} lg={6} md={12} sm={12}>
                        <div className="mt-3">
                          <span className={`${classes["product-name"]}`}>
                            IDOBAO ID80 CRYSTAL KEYBOARD KIT（GASKET MOUNT
                            VERSION)
                          </span>
                          <br />
                          <span className={`${classes["product-quantity"]}`}>
                            Quantity: 1
                          </span>
                          <br />
                          <span className={`${classes["product-price"]}`}>
                            Price:{" "}
                            <span className={`${classes["orange-text"]}`}>
                              15,990
                            </span>
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} lg={3} md={12} sm={12}>
                        <Row>
                          <Col>
                            <Form.Group
                              className={`${classes["choose-color-wrapper"]}`}
                            >
                              <Form.Label
                                className={`${classes["form-label"]}`}
                              >
                                Quantity
                              </Form.Label>
                              <input
                                type="number"
                                className={`${classes["quantity-input"]} form-control w-100`}
                                placeholder="0"
                                min="0"
                              ></input>
                            </Form.Group>
                          </Col>
                          <Col>
                            <i
                              className={`${classes["custom-icon"]} fas fa-trash`}
                            ></i>
                          </Col>
                        </Row>
                      </Col>
                      <hr />
                    </Row>
                    <Row>
                      <Col xl={2} lg={3} md={12} sm={12}>
                        <img
                          className={`${classes["product-image"]}`}
                          src="https://ph-live.slatic.net/p/5d06e3914395b4e093e535e26e7d95d7.jpg"
                          alt="product1"
                          width="100px"
                        />
                      </Col>
                      <Col xl={6} lg={6} md={12} sm={12}>
                        <div className="mt-3">
                          <span className={`${classes["product-name"]}`}>
                            IDOBAO ID80 CRYSTAL KEYBOARD KIT（GASKET MOUNT
                            VERSION)
                          </span>
                          <br />
                          <span className={`${classes["product-quantity"]}`}>
                            Quantity: 1
                          </span>
                          <br />
                          <span className={`${classes["product-price"]}`}>
                            Price:{" "}
                            <span className={`${classes["orange-text"]}`}>
                              15,990
                            </span>
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} lg={3} md={12} sm={12}>
                        <Row>
                          <Col>
                            <Form.Group
                              className={`${classes["choose-color-wrapper"]}`}
                            >
                              <Form.Label
                                className={`${classes["form-label"]}`}
                              >
                                Quantity
                              </Form.Label>
                              <input
                                type="number"
                                className={`${classes["quantity-input"]} form-control w-100`}
                                placeholder="0"
                                min="0"
                              ></input>
                            </Form.Group>
                          </Col>
                          <Col>
                            <i
                              className={`${classes["custom-icon"]} fas fa-trash`}
                            ></i>
                          </Col>
                        </Row>
                      </Col>
                      <hr />
                    </Row>
                    {/* End Product List */}
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Header className="bg-white p-0">
                    <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                      Order Summary
                    </h1>
                  </Card.Header>
                  <Card.Body>
                    <span className={`${classes["product-total-items"]}`}>
                      Total Items: 05
                    </span>
                    <br />
                    <span className={`${classes["product-total-price"]}`}>
                      Total Price:{" "}
                      <span className={`${classes["orange-text"]}`}>
                        15,990
                      </span>
                    </span>
                    <hr />
                    <p className={`${classes["vat-text"]}`}>
                      VAT included, where applicable
                    </p>
                    <Button className={`${classes["checkout-button"]}`}>
                      PROCEED TO CHECKOUT
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* End Cart Section */}
      </Fragment>
    );
  }
}

export default Cart;
