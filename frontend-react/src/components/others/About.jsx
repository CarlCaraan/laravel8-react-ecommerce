import React, { Component, Fragment } from "react";
import { Card, Container, Breadcrumb, Row, Col } from "react-bootstrap";
import classes from "./About.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

class About extends Component {
  constructor() {
    super();
    this.state = {
      about: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0]["about"];
          this.setState({
            about: JsonData,
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              About
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        <div className="bg-white pt-5 pb-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>About Us</h1>
            <Row>
              <Col xl={6}>
                {/* Start Skeletal Loading Div */}
                <div className={this.state.loaderDiv}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-2"></div>
                        <div className="ph-col-10 empty"></div>
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Skeletal Loading Div */}

                <Card
                  className={`${classes["custom-card"]} ${this.state.mainDiv}`}
                >
                  <Card.Body>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      {ReactHtmlParser(this.state.about)}
                      {/* {this.state.about} */}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </Fragment>
    );
  }
}

export default About;
