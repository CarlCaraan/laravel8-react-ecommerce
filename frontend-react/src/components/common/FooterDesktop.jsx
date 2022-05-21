import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./FooterDesktop.module.css";

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.footer}>
          <Container>
            <Row>
              <Col className="mb-5" xl={6} lg={6} md={12}>
                <h4 className={`${classes["footer-title"]}`}>
                  Payment Methods
                </h4>
                <Row className="me-5">
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-1.png")}
                      alt="delivery-services-1"
                      width="90px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-2.png")}
                      alt="delivery-services-1"
                      width="65px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-3.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-4.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-5.png")}
                      alt="delivery-services-1"
                      width="70px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-6.png")}
                      alt="delivery-services-1"
                      width="45px"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <Row>
                  <Col className="mb-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Delivery Services
                    </h4>
                    <div className="vstack gap-3">
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-1.png")}
                        alt="delivery-services-1"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-2.png")}
                        alt="delivery-services-1"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-3.png")}
                        alt="delivery-services-1"
                        width="142px"
                      />
                      <span>
                        <img
                          className="me-2"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-4.png")}
                          alt="delivery-services-1"
                          width="142px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-5.png")}
                          alt="delivery-services-1"
                          width="80px"
                        />
                      </span>
                      <span>
                        <img
                          className="me-3"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-6.png")}
                          alt="delivery-services-1"
                          width="75px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-7.png")}
                          alt="delivery-services-1"
                          width="120px"
                        />
                      </span>
                    </div>
                  </Col>
                  <Col className="mb-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Verified by
                    </h4>
                    <img
                      className="me-3"
                      src={require("../../assets/images/common/footer/verified/verified-by-1.png")}
                      alt="delivery-services-1"
                      width="100px"
                    />
                    <img
                      src={require("../../assets/images/common/footer/verified/verified-by-2.png")}
                      alt="delivery-services-1"
                      width="92px"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
