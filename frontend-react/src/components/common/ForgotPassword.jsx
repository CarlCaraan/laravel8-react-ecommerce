import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import classes from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const data = {
      email: this.state.email,
    };
    axios
      .post(AppURL.UserForgotPassword, data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (this.state.email.length === 0) {
          toast.error(error.response.data.errors.email[0]);
        } else {
          toast.error(error.response.data.message);
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
                  Forgot Password.
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
                        <Form onSubmit={this.formSubmitHandler.bind(this)}>
                          <Form.Group className="mb-3" controlId="phone">
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
                          <Button
                            type="submit"
                            className={`${classes["auth-button"]}`}
                          >
                            Submit
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
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* End React Toastify */}
      </Fragment>
    );
  }
}

export default ForgotPassword;
