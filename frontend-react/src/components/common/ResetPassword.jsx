import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.inputToken = this.inputToken.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.inputPasswordConfirmation = this.inputPasswordConfirmation.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  inputToken(event) {
    this.setState({ token: event.target.value });
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
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserResetPassword, data)
      .then((response) => {
        toast.success(response.data.message);
        document.getElementById("formReset").reset();
      })
      .catch((error) => {
        if (this.state.token.length === 0) {
          toast.error(error.response.data.errors.token[0]);
        } else if (this.state.email.length === 0) {
          toast.error(error.response.data.errors.email[0]);
        } else if (this.state.password.length === 0) {
          toast.error(error.response.data.errors.password[0]);
        } else {
          if (this.state.password !== this.state.password_confirmation) {
            toast.error(error.response.data.errors.password[0]);
          } else {
            toast.error(error.response.data.message);
          }
        }
      });
  }

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
                        <Form
                          id="formReset"
                          onSubmit={this.formSubmitHandler.bind(this)}
                        >
                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label className={`${classes["form-label"]}`}>
                              Pin Code*
                            </Form.Label>
                            <Form.Control
                              className={`${classes["form-inputs"]}`}
                              type="text"
                              placeholder="code"
                              onChange={this.inputToken}
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
                              onChange={this.inputEmail}
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
                              onChange={this.inputPassword}
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
                              onChange={this.inputPasswordConfirmation}
                            />
                          </Form.Group>
                          <Button
                            type="submit"
                            className={`${classes["auth-button"]}`}
                          >
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

export default ResetPassword;
