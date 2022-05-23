import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./UserLogin.module.css";
import { Link } from "react-router-dom";

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["login-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={8} lg={8} md={8} sm={12}>
                <h4 className={`${classes["login-header-title"]}`}>
                  Welcome to Lazapee! Please login.
                </h4>
                <h6 className={`${classes["login-subheader-title"]}`}>
                  New member?{" "}
                  <Link className={`${classes["register-link"]}`} to="/">
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
                              Phone Number*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="text"
                              placeholder="Please enter your Phone Number"
                            />
                          </Form.Group>
                          <Form.Text>
                            <Link
                              className={`${classes["forgot-link"]}`}
                              to="/login"
                            >
                              Forgot Password?
                            </Link>
                          </Form.Text>
                          <Button className={`${classes["login-button"]}`}>
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
