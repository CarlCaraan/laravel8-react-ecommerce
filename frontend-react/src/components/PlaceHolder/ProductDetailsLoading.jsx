import React, { Component, Fragment } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import classes from "./ProductDetailsLoading.module.css";

class ProductDetailsLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;
    return (
      <Fragment>
        <div className={isLoading}>
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
                          <div className="ph-item">
                            <div className="ph-col-12">
                              <div className="ph-picture"></div>
                              <div className="ph-picture"></div>
                              <div className="ph-picture"></div>
                            </div>
                          </div>
                        </Col>
                        {/* End Image Section */}

                        {/* Start Product Specifications */}
                        <Col xl={7} lg={7} md={12} sm={12}>
                          <div className="ph-item">
                            <div className="ph-col-12">
                              <div className="ph-picture"></div>
                              <div className="ph-picture"></div>
                              <div className="ph-row">
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                              </div>
                            </div>
                          </div>
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
                      <div className="ph-item">
                        <div className="ph-col-12">
                          <div className="ph-row">
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                          </div>
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
                  <Row>
                    <Col className={`${classes["description-body"]}`}>
                      <div className="ph-item">
                        <div className="ph-col-12">
                          <div className="ph-row">
                            <div className="ph-col-4"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {/* End Product Description */}

              {/* Start Product Rating */}
              <Card className={`${classes["custom-card"]}`}>
                <Card.Body className={`${classes["card-body"]}`}>
                  <Row>
                    <Col className={`${classes["review-body"]}`}>
                      <div className="ph-item">
                        <div className="ph-col-12">
                          <div className="ph-row">
                            <div className="ph-col-4"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {/* End Product Rating */}

              {/* Start Just For You */}
              <Row>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                  <div className={`${this.props.loaderDiv} `}>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-picture"></div>
                        <div className="ph-row">
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* End Just For You */}
            </Container>
          </div>
          {/* End Product Details */}
        </div>
      </Fragment>
    );
  }
}

export default ProductDetailsLoading;
