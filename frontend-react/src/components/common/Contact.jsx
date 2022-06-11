import React, { Component, Fragment } from "react";
import classes from "./Contact.module.css";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Validation from "../../validation/Validation";
import axios from "axios";
import AppURL from "../../api/AppURL";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (event) => {
    let enteredName = event.target.value;
    // alert(name);
    this.setState({ name: enteredName });
  };
  emailOnChange = (event) => {
    let enteredEmail = event.target.value;
    // alert(email);
    this.setState({ email: enteredEmail });
  };
  messageOnChange = (event) => {
    let enteredMessage = event.target.value;
    // alert(message);
    this.setState({ message: enteredMessage });
  };

  contactFormHandler = (event) => {
    event.preventDefault();
    let enteredName = this.state.name;
    let enteredEmail = this.state.email;
    let enteredMessage = this.state.message;

    // Validation
    if (enteredMessage.length === 0) {
      alert("Please Write your Message");
    } else if (enteredName.length === 0) {
      alert("Please Write your Name");
    } else if (enteredEmail.length === 0) {
      alert("Please Write your Email");
    } else if (!Validation.NameRegex.test(enteredName)) {
      alert("Invalid Name Characters");
    } else {
      let ContactFormData = new FormData();
      ContactFormData.append("name", enteredName);
      ContactFormData.append("email", enteredEmail);
      ContactFormData.append("message", enteredMessage);

      axios
        .post(AppURL.PostContact, ContactFormData)
        .then(function (response) {
          if (response.status === 200 && response.data === 1) {
            alert("Message sent successfully");
          } else {
            alert("error");
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  };

  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              Contact Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Contact Us */}
        <div className="bg-white py-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>Contact Us</h1>
            <Row>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon"]} far fa-comment-alt`}
                      ></i>
                      Chat with Us
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      Talk to CLEO, our 24/7 virtual customer care officer, or
                      <br />
                      get support from our Customer Care Specialists who
                      <br />
                      are available 24/7 (except on holidays)
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon-phone"]} fas fa-phone`}
                      ></i>
                      Call Lazapee
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      (02)7795 8900
                      <br />
                      Available daily from 8AM-8PM (except Holidays)
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon"]} fab fa-facebook`}
                      ></i>
                      Lazapee Peers PH
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      Lazada Philippines official online buyer community
                      <br />
                      Get advice and help from your fellow Lazada customers!
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            {/* Start Contact Form */}
            <Row>
              <Col className="mb-4" xl={4}>
                <h1 className={`${classes["contact-title"]}`}>Stay In Touch</h1>
                <Form onSubmit={this.contactFormHandler}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Full Name
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      type="text"
                      placeholder="Enter Name"
                      onChange={this.nameOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Email
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      type="email"
                      placeholder="Enter Email Address"
                      onChange={this.emailOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Message
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      as="textarea"
                      rows={3}
                      placeholder="Enter Message"
                      onChange={this.messageOnChange}
                    />
                  </Form.Group>
                  <Button type="submit" className={`${classes["send-button"]}`}>
                    Send
                  </Button>
                </Form>
              </Col>
              <Col className="mb-4">
                <iframe
                  title="Lazapee Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7726.506553389561!2d121.42226903665936!3d14.470140574603013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ede77c57074d%3A0xcde0b295efdad3a3!2sMunicipal%20Hall%20of%20Santa%20Maria%2C%20Laguna!5e0!3m2!1sen!2sph!4v1653659092336!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  styles="border:0;"
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>

            {/* End Contact Form */}
          </Container>
        </div>
        {/* End Contact Us */}
      </Fragment>
    );
  }
}

export default Contact;
