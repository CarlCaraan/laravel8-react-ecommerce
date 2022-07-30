import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import classes from "./Profile.module.css";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={12} lg={12} md={12} sm={12}>
                <h4 className={`${classes["auth-header-title"]}`}>
                  Manage My Account
                </h4>

                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
