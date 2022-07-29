import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./UserRegister.module.css";
import { Link } from "react-router-dom";

class UserRegister extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={8} lg={8} md={8} sm={12}>
                <h4 className={`${classes["auth-header-title"]}`}>
                  Welcome to Lazapee! Please Register.
                </h4>
                <h6 className={`${classes["auth-subheader-title"]}`}>
                  Already member?{" "}
                  <Link to="/login" className={`${classes["register-link"]}`}>
                    Login
                  </Link>{" "}
                  here.
                </h6>

                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <Row>
                      <Col></Col>
                      <Col xl={8}>
                        <Form>
                          <Row>
                            <Col xl={6} lg={6} md={12} sm={12}>
                              <Form.Group className="mb-3" controlId="phone">
                                <Form.Label
                                  className={`${classes["form-label"]}`}
                                >
                                  First Name*
                                </Form.Label>
                                <Form.Control
                                  className={`${classes["form-inputs"]}`}
                                  type="text"
                                  placeholder="First Name"
                                />
                              </Form.Group>
                            </Col>

                            <Col xl={6} lg={6} md={12} sm={12}>
                              <Form.Group className="mb-3" controlId="phone">
                                <Form.Label
                                  className={`${classes["form-label"]}`}
                                >
                                  Last Name*
                                </Form.Label>
                                <Form.Control
                                  className={`${classes["form-inputs"]}`}
                                  type="text"
                                  placeholder="Last Name"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Email Address*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="email"
                              placeholder="Email Address"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Password*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Confirm Password*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="password"
                              placeholder="Confirm Password"
                            />
                          </Form.Group>

                          <Button className={`${classes["auth-button"]}`}>
                            REGISTER
                          </Button>
                        </Form>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default UserRegister;
