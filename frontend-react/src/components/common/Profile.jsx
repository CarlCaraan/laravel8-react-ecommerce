import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import classes from "./Profile.module.css";

class Profile extends Component {
  render() {
    let first_name;
    let last_name;
    let profile_photo;
    if (this.props.user) {
      first_name = this.props.user.first_name;
      last_name = this.props.user.last_name;
      profile_photo = this.props.user.profile_photo_path;
    }

    // Authorization
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={2} lg={2} md={2} sm={12}>
                <span className={`${classes["user-name"]}`}>
                  Hello, {first_name} {last_name}
                </span>
                <br />
                <Button className={`${classes["verified-button"]}`}>
                  <i className="fas fa-check-circle"></i> Verified Account
                </Button>
                <br />
                <img
                  src={`http://127.0.0.1:8000/upload/admin_images/${profile_photo}`}
                  alt="profile"
                  className="img-fluid mt-3 img-thumbnail"
                  width="100px"
                  height="100"
                />
                <br />
                <Link
                  className={`${classes["mypurchase-button"]}`}
                  to="orderlist"
                >
                  <small>My Purchase</small>
                </Link>
              </Col>
              <Col className="mx-auto py-5" xl={10} lg={10} md={10} sm={12}>
                <Row>
                  <Col>
                    <h4 className={`${classes["auth-header-title"]}`}>
                      Manage My Account
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col xl={4} lg={12} md={12} sm={12}>
                    <Card className={`${classes["custom-card"]}`}>
                      <Card.Body>
                        <p>Personal Profile</p>
                        <small className={`${classes["dashboard-info"]}`}>
                          Carl Caraan
                        </small>
                        <br />
                        <small className={`${classes["dashboard-info"]}`}>
                          bannedefused@gmail
                        </small>
                        <br />
                        <br />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={12}>
                    <Card className={`${classes["custom-card"]}`}>
                      <Card.Body>
                        <p>Address Book</p>
                        <small className={`${classes["dashboard-info"]}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquam explicabo distinctio, cumque unde atque
                          nostrum modi sint architecto officiis ullam quam sunt
                          dolorem maxime nesciunt a animi, quasi facilis
                          delectus?
                        </small>
                        <br />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
