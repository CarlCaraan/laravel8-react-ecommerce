import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenuDesktop from "./MegaMenuDesktop";
import HomeSlider from "./HomeSlider";
import classes from "./Herosection.module.css";
import MegaMenuMobile from "./MegaMenuMobile";
import axios from "axios";
import AppURL from "../../api/AppURL";
import SliderLoading from "../PlaceHolder/SliderLoading";

class Herosection extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
      SliderData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({
          MenuData: response.data,
        });
      })
      .catch((error) => {});

    axios
      .get(AppURL.AllSlider)
      .then((response) => {
        this.setState({
          SliderData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        {/* Start Skeleton Loading PlaceHolder */}
        <SliderLoading isLoading={this.state.isLoading} />
        {/* End Skeleton Loading PlaceHolder */}

        <div className={this.state.mainDiv}>
          <div className={`${classes["herosection-container"]}`}>
            <Container>
              <Row className="mx-0">
                <Col className="px-0" xl={2} lg={12} md={12} sm={12}>
                  <div className={`${classes["Desktop"]}`}>
                    <MegaMenuDesktop data={this.state.MenuData} />
                  </div>
                  <div className={`${classes["Mobile"]}`}>
                    <MegaMenuMobile />
                  </div>
                </Col>
                <Col className="px-0" xl={10} lg={12} md={12} sm={12}>
                  <HomeSlider data={this.state.SliderData} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Herosection;
