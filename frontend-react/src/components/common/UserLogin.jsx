import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./UserLogin.module.css";
import { Link } from "react-router-dom";

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={8} lg={8} md={8} sm={12}>
                <h4 className={`${classes["auth-header-title"]}`}>
                  Welcome to Lazapee! Please Login.
                </h4>
                <h6 className={`${classes["auth-subheader-title"]}`}>
                  New member?{" "}
                  <Link
                    to="/register"
                    className={`${classes["register-link"]}`}
                  >
                    Register
                  </Link>{" "}
                  here.
                </h6>

                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <Row>
                      <Col></Col>
                      <Col xl={6}>
                        <Form>
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
                              type="email"
                              placeholder="Password"
                            />
                          </Form.Group>
                          <Form.Text>
                            <Link
                              className={`${classes["forgot-link"]}`}
                              to="/forgotpassword"
                            >
                              Forgot Password?
                            </Link>
                          </Form.Text>
                          <Button className={`${classes["auth-button"]}`}>
                            LOGIN
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

export default UserLogin;
