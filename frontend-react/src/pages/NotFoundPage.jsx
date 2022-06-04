import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

class NotFoundPage extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h5 className="mt-5">
            <i class="fas fa-exclamation-triangle"></i> 404 - Not Found
          </h5>
        </Container>
      </Fragment>
    );
  }
}

export default NotFoundPage;
