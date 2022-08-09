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

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",

      // Modal
      show: false,
      NotificationData: [],
      notificationTitle: "",
      notificationMessage: "",
      notificationDate: "",
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

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = (event) => {
    this.setState({ show: true });
    let nTitle = event.target.getAttribute("data-title");
    let nMessage = event.target.getAttribute("data-message");
    let nDate = event.target.getAttribute("data-date");
    this.setState({
      notificationTitle: nTitle,
      notificationMessage: nMessage,
      notificationDate: nDate,
    });
  };

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
                  onClick={this.handleShow}
                  className={`${classes["custom-review-btn"]} mt-2`}
                >
                  Write a Review
                </Button>
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6 className={`${classes["modal-header"]}`}>
              Write a Review
              {this.state.notificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6 className={`${classes["modal-title"]}`}>
              {this.state.notificationTitle}
            </h6>
            <p className={`${classes["modal-body"]}`}>
              {this.state.notificationMessage}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={`${classes["modal-button"]}`}
              onClick={this.handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* End Modal */}
      </Fragment>
    );
  }
}

export default OrderList;
