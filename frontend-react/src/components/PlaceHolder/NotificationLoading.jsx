import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class NotificationLoading extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
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
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
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
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
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
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
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
      </Fragment>
    );
  }
}

export default NotificationLoading;
