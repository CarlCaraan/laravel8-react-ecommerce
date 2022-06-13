import React, { Component, Fragment } from "react";
import { Card, Container, Breadcrumb, Row, Col } from "react-bootstrap";
import classes from "./Privacy.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    // Session Storage
    let SiteInfoPrivacy = sessionStorage.getItem("SiteInfo");

    if (SiteInfoPrivacy == null) {
      axios
        .get(AppURL.SiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode === 200) {
            let JsonData = response.data[0]["privacy"];
            this.setState({
              privacy: JsonData,
              loaderDiv: "d-none",
              mainDiv: "",
            });
            // Set Session Data
            sessionStorage.setItem("SiteInfoPrivacy", JsonData);
          } else {
            toast.error("Something Went Wrong!", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: "bottom-center",
          });
        });
    } // End If Condition
    else {
      this.setState({
        privacy: SiteInfoPrivacy,
      });
    }
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
                {/* Start Skeletal Loading Div */}
                <div className={this.state.loaderDiv}>
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
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
                {/* End Skeletal Loading Div */}

                <Card
                  className={`${classes["custom-card"]} ${this.state.mainDiv}`}
                >
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

        {/* Start React Toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* End React Toastify */}
      </Fragment>
    );
  }
}

export default Privacy;
