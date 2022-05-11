import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import MegaMenu from "./MegaMenu";
import classes from "./Herosection.module.css";

class Herosection extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["herosection-container"]}`}>
          <Container>
            <Row>
              <Col lg={2} md={2} sm={12}>
                <MegaMenu />
              </Col>
              <Col lg={10} md={10} sm={12}>
                <Slider />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Herosection;
