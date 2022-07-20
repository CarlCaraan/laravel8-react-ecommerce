import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./SliderLoading.module.css";

class SliderLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;
    return (
      <Fragment>
        <div className={isLoading}>
          <Container>
            <Row>
              <Col xl={2} lg={2} md={12} sm={12} className="p-0">
                {/* Start MegaMenu Placeholder Skeleton Desktop */}
                <div
                  className={`${this.props.loaderDiv} ${classes["Desktop"]}`}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End MegaMenu Placeholder Skeleton Desktop */}
              </Col>
              <Col xl={10} lg={10} md={12} sm={12} className="p-0">
                {/* Start Slider Image Placeholder Skeleton Desktop */}
                <div
                  className={`${this.props.loaderDivSlider} ${classes["Desktop"]}`}
                >
                  <div className="ph-item">
                    <div className="ph-picture"></div>
                    <div className="ph-picture"></div>
                  </div>
                </div>
                {/* End Slider Image Placeholder Skeleton Desktop */}

                {/* Start Slider Image Placeholder Skeleton Mobile */}
                <div
                  className={`${this.props.loaderDivSlider} ${classes["Mobile"]}`}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                      </div>
                      <br />
                      <div className="ph-picture"></div>
                    </div>
                  </div>
                </div>
                {/* End Slider Image Placeholder Skeleton Mobile */}
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default SliderLoading;
