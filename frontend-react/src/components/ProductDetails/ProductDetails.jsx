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
import classes from "./ProductDetails.module.css";
import Product1 from "../../assets/images/product/product1.png";
import Product2 from "../../assets/images/product/product2.png";
import Product3 from "../../assets/images/product/product3.png";
import Product4 from "../../assets/images/product/product4.png";

class ProductDetails extends Component {
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
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Category Name
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              Product Name
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Product Details */}
        <div className={`${classes["product-container"]} py-5`}>
          <Container>
            <Card className={`${classes["custom-card"]}`}>
              <Card.Body className={`${classes["card-body"]}`}>
                <Row>
                  {/* Start Left Card */}
                  <Col
                    xl={9}
                    lg={9}
                    md={12}
                    sm={12}
                    className={`${classes["left-card"]} py-2`}
                  >
                    <Row>
                      {/* Start Image Section */}
                      <Col xl={5} lg={5} md={12} sm={12}>
                        <img
                          className="img-fluid w-100"
                          src={Product1}
                          alt=""
                        />
                        <Row className="pt-1 px-3">
                          <Col className="p-0 m-0">
                            <img className="img-fluid" src={Product2} alt="" />
                          </Col>
                          <Col className="p-0 m-0">
                            <img className="img-fluid" src={Product3} alt="" />
                          </Col>
                          <Col className="p-0 m-0">
                            <img className="img-fluid" src={Product4} alt="" />
                          </Col>
                        </Row>
                      </Col>
                      {/* End Image Section */}

                      {/* Start Product Specifications */}
                      <Col xl={7} lg={7} md={12} sm={12}>
                        <h1>Product Name</h1>
                        <hr />
                        <span className={`${classes["discounted-price"]}`}>
                          ₱27.00
                        </span>
                        <br />
                        <span className={`${classes["original-price"]}`}>
                          ₱27.00
                        </span>
                        <span className={`${classes["discount-percent"]}`}>
                          ₱27.00
                        </span>
                        <hr />
                        <Form.Label>Choose Color</Form.Label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Black
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Green
                          </label>
                        </div>
                        <br />
                        <br />
                        <Form.Label>Choose Size</Form.Label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            XL
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            L
                          </label>
                        </div>
                        <br />
                        <br />
                        <Form.Label>Quantity</Form.Label>
                        <input
                          type="number"
                          className="form-control w-25"
                          min="0"
                        ></input>
                        <hr />
                        <Row>
                          <Col>
                            <Button className="btn btn-warning w-100">
                              Buy Now
                            </Button>
                          </Col>
                          <Col>
                            <Button className="btn btn-warning w-100">
                              Add to Cart
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      {/* End Product Specifications */}
                    </Row>
                  </Col>
                  {/* End Left Card */}

                  {/* Start Right Card */}
                  <Col
                    xl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    className={`${classes["right-card"]} py-2`}
                  >
                    asd
                  </Col>
                  {/* End Right Card */}
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>
        {/* End Product Details */}
      </Fragment>
    );
  }
}

export default ProductDetails;
