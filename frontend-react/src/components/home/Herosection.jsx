import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import classes from "./Herosection.module.css";

class Herosection extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["herosection-container"]}`}>
          <Container>
            <Row className="mx-0">
              <Col className="px-0" xl={2} lg={12} md={12} sm={12}>
                <MegaMenu />
              </Col>
              <Col className="px-0" xl={10} lg={12} md={12} sm={12}>
                <HomeSlider />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Herosection;
