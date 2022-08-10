import React, { Component, Fragment } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import classes from "./OrderList.module.css";
import cogoToast from "cogo-toast";

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",

      name: "",
      rating: "",
      comment: "",
      product_name: "",
      product_code: "",

      // Modal
      ReviewModal: false,
    };
  }

  componentDidMount() {
    let email = this.props.user.email;
    axios
      .get(AppURL.OrderListByUser(email))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  ReviewModalOpen = (product_code, product_name) => {
    this.setState({
      ReviewModal: true,
      product_code: product_code,
      product_name: product_name,
    });
  };
  ReviewModalClose = () => {
    this.setState({ ReviewModal: false });
  };

  nameOnChange = (event) => {
    let enteredName = event.target.value;
    this.setState({ name: enteredName });
  };
  ratingOnChange = (event) => {
    let enteredRating = event.target.value;
    this.setState({ rating: enteredRating });
  };
  commentOnChange = (event) => {
    let enteredComment = event.target.value;
    this.setState({ comment: enteredComment });
  };

  PostReview = () => {
    let product_code = this.state.product_code;
    let product_name = this.state.product_name;
    let rating = this.state.rating;
    let comment = this.state.comment;
    let name = this.state.name;

    if (name.length === 0) {
      cogoToast.error("Name field is required!", {
        position: "top-right",
      });
    } else if (rating.length === 0) {
      cogoToast.error("Rating field is required!", {
        position: "top-right",
      });
    } else if (comment.length === 0) {
      cogoToast.error("Comment field is required!", {
        position: "top-right",
      });
    } else if (comment.length > 50) {
      cogoToast.error("Comment can't exceed more tha 50 characters!", {
        position: "top-right",
      });
    } else {
      let MyFormData = new FormData();
      MyFormData.append("product_code", product_code);
      MyFormData.append("product_name", product_name);
      MyFormData.append("reviewer_name", name);
      MyFormData.append("reviewer_photo", "");
      MyFormData.append("reviewer_rating", rating);
      MyFormData.append("reviewer_comments", comment);

      axios
        .post(AppURL.PostReview, MyFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Review submitted successfully", {
              position: "top-right",
            });
            this.ReviewModalClose();
          } else {
            cogoToast.error("Something went wrong!", {
              position: "top-right",
            });
            this.ReviewModalClose();
          }
        })
        .catch((error) => {
          cogoToast.error("Something went wrong!", {
            position: "top-right",
          });
          this.ReviewModalClose();
        });
    }
  }; // End Post Review Method

  render() {
    const OrderLists = this.state.ProductData;

    const MyView = OrderLists.map((OrderList, i) => {
      return (
        <Row className={this.state.mainDiv} key={i.toString()}>
          <Col xl={2} lg={3} md={12} sm={12}>
            <Form.Group>
              <Form.Label className={`${classes["form-label"]}`}>
                SL No
              </Form.Label>
              <br />
              <small className="text-muted">{OrderList.invoice_no}</small>
            </Form.Group>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div>
              <span className={`${classes["product-name"]}`}>
                {OrderList.product_name}
              </span>
              <br />
              <span className={`${classes["product-quantity"]}`}>
                Status: {OrderList.quantity}
              </span>
              <br />
              <span className={`${classes["product-price"]}`}>
                Price: ₱
                <span className={`${classes["orange-text"]}`}>
                  {OrderList.unit_price}
                </span>
              </span>
              <br />
              <span className={`${classes["product-price"]}`}>
                Total Price: ₱
                <span className={`${classes["orange-text"]}`}>
                  {OrderList.total_price}
                </span>
              </span>
            </div>
          </Col>
          <Col xl={4} lg={3} md={12} sm={12}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={`${classes["form-label"]}`}>
                    Status
                  </Form.Label>
                  <br />
                  {OrderList.order_status}
                </Form.Group>
              </Col>
              <Col>
                <Button
                  onClick={this.ReviewModalOpen.bind(
                    this,
                    OrderList.product_code,
                    OrderList.product_name
                  )}
                  className={`${classes["custom-review-btn"]} mt-2`}
                >
                  Write a Review
                </Button>
                <span>{OrderList.product_code}</span>
              </Col>
            </Row>
          </Col>
          <hr className="mt-3" />
        </Row>
      );
    });
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
              My Purchase
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Cart Section */}
        <div className={`${classes["cart-container"]} py-5`}>
          <Container>
            <Row>
              <Col xl={9} lg={9} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Header className="bg-white p-0">
                    <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                      Purchase History
                    </h1>
                  </Card.Header>
                  <Card.Body>
                    {/* Start Skeleton Placeholder */}
                    <div className={`${this.state.isLoading} ph-item`}>
                      <div className="ph-col-2">
                        <div className="ph-picture"></div>
                      </div>
                      <div className="ph-col-10">
                        <div className="ph-row">
                          <div className="ph-col-4 big"></div>
                          <div className="ph-col-4 empty big"></div>
                          <div className="ph-col-4 big"></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>
                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>
                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-6 empty"></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-6 empty"></div>
                        </div>
                      </div>
                    </div>
                    {/* End Skeleton Placeholder */}

                    {MyView}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Cart Section */}

        {/* Start Modal */}
        <Modal show={this.state.ReviewModal} onHide={this.ReviewModalClose}>
          <Modal.Header closeButton>
            <h6 className={`${classes["modal-header"]}`}>
              Write a Review
              {this.state.notificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={this.nameOnChange}
                  className={`${classes["checkout-custom-input"]}`}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Product Rating</Form.Label>
                <Form.Select
                  aria-label="rating"
                  className={`${classes["checkout-custom-input"]} text-muted`}
                  onChange={this.ratingOnChange}
                >
                  <option defaultValue="">Select Product Rating</option>
                  <option value="1">Very Poor</option>
                  <option value="2">Poor</option>
                  <option value="3">Satisfied</option>
                  <option value="4">Very Satisfied</option>
                  <option value="5">Excellent</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  className={`${classes["checkout-custom-input"]}`}
                  type="text"
                  placeholder="Message"
                  as="textarea"
                  rows={2}
                  onChange={this.commentOnChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={`${classes["modal-button"]}`}
              onClick={this.ReviewModalClose}
            >
              Close
            </Button>
            <Button
              className={`${classes["modal-button"]}`}
              onClick={this.PostReview}
            >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
        {/* End Modal */}
      </Fragment>
    );
  }
}

export default OrderList;
