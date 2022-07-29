import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";

class ResetPassword extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={8} lg={8} md={8} sm={12}>
                <h4 className={`${classes["auth-header-title"]}`}>
                  Reset Password.
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
                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Pin Code*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="text"
                              placeholder="code"
                            />
                          </Form.Group>
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
                            Reset Password
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

export default ResetPassword;
