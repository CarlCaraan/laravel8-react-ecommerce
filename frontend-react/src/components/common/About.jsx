import React, { Component, Fragment } from "react";
import { Card, Container } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Card>
            <Card.Body>
              <h1>About Us</h1>
            </Card.Body>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

export default About;
