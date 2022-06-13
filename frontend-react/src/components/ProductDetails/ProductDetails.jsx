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
        <div className={`${classes["product-container"]}`}>
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
                        <h1 className={`${classes["product-name"]}`}>
                          Product Name
                          <i
                            className={`${classes["custom-icon"]} fas fa-heart float-end`}
                          ></i>
                        </h1>
                        <div className={`${classes["price-wrapper"]}`}>
                          <span className={`${classes["discounted-price"]}`}>
                            ₱27.00
                          </span>
                          <br />
                          <span className={`${classes["original-price"]}`}>
                            ₱27.00
                          </span>
                          <span className={`${classes["discount-percent"]}`}>
                            -29%
                          </span>
                        </div>

                        <Form.Group
                          className={`${classes["choose-color-wrapper"]}`}
                        >
                          <Form.Label className={`${classes["form-label"]}`}>
                            Choose Color
                          </Form.Label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="color"
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
                              name="color"
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
                        </Form.Group>

                        <Form.Group
                          className={`${classes["choose-color-wrapper"]}`}
                        >
                          <Form.Label className={`${classes["form-label"]}`}>
                            Choose Size
                          </Form.Label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="size"
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
                              name="size"
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
                        </Form.Group>

                        <Form.Group
                          className={`${classes["choose-color-wrapper"]}`}
                        >
                          <Form.Label className={`${classes["form-label"]}`}>
                            Quantity
                          </Form.Label>
                          <input
                            type="number"
                            className={`${classes["quantity-input"]} form-control`}
                            placeholder="0"
                            min="0"
                          ></input>
                        </Form.Group>

                        <Row className={`${classes["button-wrapper"]}`}>
                          <Col
                            xl={6}
                            lg={6}
                            md={6}
                            sm={12}
                            className="px-1 mb-2"
                          >
                            <Button className={`${classes["buy-button"]}`}>
                              Buy Now
                            </Button>
                          </Col>
                          <Col
                            xl={6}
                            lg={6}
                            md={6}
                            sm={12}
                            className="px-1 mb-2"
                          >
                            <Button
                              className={`${classes["addtocart-button"]}`}
                            >
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
                    <div className={`${classes["right-card-wrapper"]} mt-2`}>
                      <span className={`${classes["right-card-headings"]}`}>
                        Return & Warranty
                      </span>
                      <div className="hstack gap-3 mt-2">
                        <i
                          className={`${classes["custom-icon"]} fas fa-undo`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          7 Days Money Back Guarantee
                          <br />
                          <span className={`${classes["right-card-sub-body"]}`}>
                            Change of mind is not applicable
                          </span>
                        </span>
                      </div>
                      <div className="hstack gap-3 mt-3">
                        <i
                          className={`${classes["custom-icon"]} fas fa-shield-alt`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          7 Days Local Supplier Refund Warranty
                        </span>
                      </div>
                    </div>
                    <div className={`${classes["right-card-wrapper"]} mt-2`}>
                      <span className={`${classes["right-card-headings"]}`}>
                        Sold by
                      </span>
                      <div className="hstack gap-3">
                        <i
                          className={`${classes["custom-icon"]} fas fa-store`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          Jelly House
                        </span>
                      </div>
                    </div>
                  </Col>
                  {/* End Right Card */}
                </Row>
              </Card.Body>
            </Card>

            {/* Start Product Description */}
            <Card className={`${classes["custom-card"]}`}>
              <Card.Body className={`${classes["card-body"]}`}>
                <Row className="bg-white">
                  <Col className={`${classes["description-header"]}`}>
                    Product Details of{" "}
                  </Col>
                </Row>
                <Row>
                  <Col className={`${classes["description-body"]}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste tenetur maiores fuga praesentium modi magni quos
                    ducimus! Labore deleniti nobis, incidunt eius eligendi
                    repellendus minus dignissimos voluptatum aperiam recusandae
                    maxime? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste tenetur maiores fuga praesentium modi magni quos
                    ducimus! Labore deleniti nobis, incidunt eius eligendi
                    repellendus minus dignissimos voluptatum aperiam recusandae
                    maxime? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste tenetur maiores fuga praesentium modi magni quos
                    ducimus! Labore deleniti nobis, incidunt eius eligendi
                    repellendus minus dignissimos voluptatum aperiam recusandae
                    maxime? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste tenetur maiores fuga praesentium modi magni quos
                    ducimus! Labore deleniti nobis, incidunt eius eligendi
                    repellendus minus dignissimos voluptatum aperiam recusandae
                    maxime?
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* End Product Description */}

            {/* Start Product Rating */}
            <Card className={`${classes["custom-card"]}`}>
              <Card.Body className={`${classes["card-body"]}`}>
                <Row className="bg-white">
                  <Col className={`${classes["review-header"]}`}>
                    Ratings & Review of{" "}
                  </Col>
                </Row>
                <Row>
                  <Col className={`${classes["review-body"]}`}>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <div>
                      <span className={`${classes["review-name"]}`}>
                        Carl Caraan{" "}
                        <span className={`${classes["text-verified"]}`}>
                          <i className="fas fa-check-circle"></i> Verified
                          Purchase
                        </span>
                      </span>
                    </div>
                    <div className={`${classes["review-text-body"]}`}>
                      This is my first custom keyboard and I had fun building
                      it! The build quality is solid and it is beginner
                      friendly. It doesn’t include the tools needed to assemble
                      it though. Make sure you have philips screwdriver and hex
                      keys for the small screws. I also recommend buying other
                      tools like a switch puller.
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* End Product Rating */}
          </Container>
        </div>
        {/* End Product Details */}
      </Fragment>
    );
  }
}

export default ProductDetails;
