import React, { Component, Fragment } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import classes from "./Notification.module.css";

class Notification extends Component {
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
      </Fragment>
    );
  }
}

export default Notification;
