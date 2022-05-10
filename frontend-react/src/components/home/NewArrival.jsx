import React, { Component, Fragment } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Slider from "react-slick";

class NewArrival extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h2 className="section-header">New Arrivals</h2>

          {/* Start New Arrival Product Card */}
          <Row className="mb-2">
            <Col
              className="mb-2 p-1"
              key={1}
              xl={2}
              lg={2}
              md={2}
              sm={4}
              xs={6}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">Spiderman Gloves</span>
                  <br />
                  <span className="card-product-price">₱2.00</span>
                  <br />
                  <strike className="card-product-discount">₱799.00</strike>
                  <span className="card-product-discount-percent"> -71%</span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* End New Arrival Product Card */}
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
