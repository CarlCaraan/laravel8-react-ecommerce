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
import classes from "./Notification.module.css";

class Notification extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        {" "}
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
              <Col className="mb-2" xl={6}>
                <Card
                  onClick={this.handleShow}
                  className={`${classes["custom-card"]}`}
                >
                  <Card.Body>
                    <p className={`${classes["notification-title"]}`}>
                      Lorem Ipsum
                    </p>
                    <p className={`${classes["notification-date-status"]}`}>
                      <i className="fas fa-bell"></i> Date: 06/05/22 | Status:
                      Unread
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={6}>
                <Card
                  onClick={this.handleShow}
                  className={`${classes["custom-card"]}`}
                >
                  <Card.Body>
                    <p className={`${classes["notification-title"]}`}>
                      Lorem Ipsum
                    </p>
                    <p className={`${classes["notification-date-status"]}`}>
                      <i className="fas fa-bell"></i> Date: 06/05/22 | Status:
                      Unread
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
        {/* Start Modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6 className={`${classes["modal-header"]}`}>
              <i className="fa fa-bell"></i> Date: 06/05/22
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6 className={`${classes["modal-title"]}`}>
              Woohoo, you're reading this text in a modal!
            </h6>
            <p className={`${classes["modal-body"]}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              necessitatibus quas molestiae quod quos est incidunt aut eligendi
              id veniam? Enim commodi nemo nisi possimus blanditiis quidem,
              maiores dolore voluptas!
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
