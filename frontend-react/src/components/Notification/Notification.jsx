import axios from "axios";
import React, { Component, Fragment } from "react";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Modal,
  Button,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AppURL from "../../api/AppURL";
import NotificationLoading from "../PlaceHolder/NotificationLoading";
import classes from "./Notification.module.css";

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      NotificationData: [],
      isLoading: "",
      mainDiv: "d-none",
      notificationTitle: "",
      notificationMessage: "",
      notificationDate: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((response) => {
        this.setState({
          NotificationData: response.data,
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
    // Authorization
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    const NotificationLists = this.state.NotificationData;
    const MyView = NotificationLists.map((NotificationList, i) => {
      return (
        <Col key={i.toString()} className={`${this.state.mainDiv} mb-2`} xl={6}>
          <Card className={`${classes["custom-card"]}`}>
            <Card.Body>
              <p className={`${classes["notification-title"]}`}>
                {NotificationList.title}
              </p>
              <p className={`${classes["notification-message"]}`}>
                {NotificationList.message}
              </p>
              <p className={`${classes["notification-date-status"]}`}>
                <i className="fas fa-bell"></i> Date: {NotificationList.date} |
                Status: Unread
              </p>
              <Button
                className={`${classes["modal-button"]}`}
                data-title={NotificationList.title}
                data-message={NotificationList.message}
                data-date={NotificationList.date}
                onClick={this.handleShow}
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
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
              Notification
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}
        <div className="bg-white pt-5 pb-5">
          <Container>
            <h1 className={`${classes["notification-headings"]}`}>
              Notifications
            </h1>
            <Row>
              <div className={this.state.isLoading}>
                <NotificationLoading />
              </div>
              {MyView}
            </Row>
          </Container>
          <br />
          <br />
        </div>

        {/* Start Modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6 className={`${classes["modal-header"]}`}>
              <i className="fa fa-bell"></i> Date:
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

export default Notification;
