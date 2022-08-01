import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./UserRegister.module.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      loggedIn: false,
    };
    this.inputFirstName = this.inputFirstName.bind(this);
    this.inputLastName = this.inputLastName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.inputPasswordConfirmation = this.inputPasswordConfirmation.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  inputFirstName(event) {
    this.setState({ first_name: event.target.value });
  }
  inputLastName(event) {
    this.setState({ last_name: event.target.value });
  }
  inputEmail(event) {
    this.setState({ email: event.target.value });
  }
  inputPassword(event) {
    this.setState({ password: event.target.value });
  }
  inputPasswordConfirmation(event) {
    this.setState({ password_confirmation: event.target.value });
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserRegister, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
      })
      .catch((error) => {
        if (this.state.first_name.length === 0) {
          toast.error("First Name field is required");
        } else if (this.state.last_name.length === 0) {
          toast.error("Last Name field is required");
        } else if (this.state.email.length === 0) {
          toast.error("Email field is required");
        } else if (this.state.password.length === 0) {
          toast.error("Password field is required");
        } else if (this.state.password_confirmation.length === 0) {
          toast.error("Password Confirmation field is required");
        } else {
          document.getElementById("passwordField").value = "";
          document.getElementById("passwordConfirmationField").value = "";
          if (this.state.password !== this.state.password_confirmation) {
            toast.error(error.response.data.errors.password[0]);
            document.getElementById("passwordField").value = "";
            document.getElementById("passwordConfirmationField").value = "";
          } else {
            toast.error("Email already exists!");
            document.getElementById("passwordField").value = "";
            document.getElementById("passwordConfirmationField").value = "";
          }
        }
      });
  }

  render() {
    // Redirect After Register
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
                        <Form onSubmit={this.formSubmitHandler}>
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
                                  onChange={this.inputFirstName}
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
                                  onChange={this.inputLastName}
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
                              onChange={this.inputEmail}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Password*
                            </Form.Label>
                            <Form.Control
                              id="passwordField"
                              className={`${classes["form-inputs"]}`}
                              type="password"
                              placeholder="Password"
                              onChange={this.inputPassword}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Confirm Password*
                            </Form.Label>
                            <Form.Control
                              id="passwordConfirmationField"
                              className={`${classes["form-inputs"]}`}
                              type="password"
                              placeholder="Confirm Password"
                              onChange={this.inputPasswordConfirmation}
                            />
                          </Form.Group>

                          <Button
                            type="submit"
                            className={`${classes["auth-button"]}`}
                          >
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

        {/* Start React Toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
        />
        {/* End React Toastify */}
      </Fragment>
    );
  }
}

export default UserRegister;
