import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./UserLogin.module.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false,
    };
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(AppURL.UserLogin, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        // this.props.setUser(response.data.user);
      })
      .catch((error) => {});
  }

  render() {
    // Redirect After Login
    if (this.state.loggedIn) {
      return <Redirect to={"/"} />;
    }

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
                        <Form onSubmit={this.formSubmitHandler.bind(this)}>
                          <Form.Group className="mb-3" controlId="email">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Email Address*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="email"
                              placeholder="Email Address"
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="password">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Password*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="password"
                              placeholder="Password"
                              onChange={(e) => {
                                this.setState({ password: e.target.value });
                              }}
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
                          <Button
                            type="submit"
                            className={`${classes["auth-button"]}`}
                          >
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
