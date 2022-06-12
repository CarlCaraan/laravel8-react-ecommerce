import React, { Component, Fragment } from "react";
import { Card, Container, Breadcrumb, Row, Col } from "react-bootstrap";
import classes from "./Privacy.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0]["privacy"];
          this.setState({
            privacy: JsonData,
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
              Privacy
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        <div className="bg-white pt-5 pb-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>Privacy Policy</h1>
            <Row>
              <Col xl={6}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body className={`${classes["custom-privacy"]}`}>
                    {ReactHtmlParser(this.state.privacy)}
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

export default Privacy;
