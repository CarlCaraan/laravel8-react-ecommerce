import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class FeaturedLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;

    return (
      <Fragment>
        <div className={isLoading}>
          <Container>
            <Row>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                <div className={`${this.props.loaderDiv} `}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedLoading;
