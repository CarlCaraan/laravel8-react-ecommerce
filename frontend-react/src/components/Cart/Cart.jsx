import React, { Component, Fragment } from "react";
import { Container, Breadcrumb, Card, Row, Col, Form } from "react-bootstrap";
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
            <Card className={`${classes["custom-card"]}`}>
              <Card.Header className="bg-white p-0">
                <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                  My Cart
                </h1>
              </Card.Header>
              <Card.Body>
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
                        IDOBAO ID80 CRYSTAL KEYBOARD KIT（GASKET MOUNT VERSION)
                      </span>
                      <br />
                      <span className={`${classes["product-quantity"]}`}>
                        Quantity: 1
                      </span>
                      <br />
                      <span className={`${classes["product-price"]}`}>
                        Price: 15,990
                      </span>
                    </div>
                  </Col>
                  <Col xl={4} lg={3} md={12} sm={12}>
                    <Row>
                      <Col>
                        <Form.Group
                          className={`${classes["choose-color-wrapper"]}`}
                        >
                          <Form.Label className={`${classes["form-label"]}`}>
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
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>

        {/* End Cart Section */}
      </Fragment>
    );
  }
}

export default Cart;
