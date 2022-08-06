import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Breadcrumb, Button } from "react-bootstrap";
import classes from "./Favorite.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import cogoToast from "cogo-toast";
import Spinner from "react-bootstrap/Spinner";
import { Redirect } from "react-router-dom";

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
      removeToFav: false,
      PageRefreshStatus: false,
    };
  }

  componentDidMount() {
    let email = this.props.user.email;
    axios
      .get(AppURL.FavouriteList(email))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  removeItem = (event) => {
    this.setState({ removeToFav: true });
    let product_code = event.target.getAttribute("data-code");
    let email = this.props.user.email;

    axios
      .get(AppURL.FavouriteRemove(product_code, email))
      .then((response) => {
        cogoToast.success("Product removed Successfully", {
          position: "top-right",
        });
        this.setState({ removeToFav: false });
        this.setState({ PageRefreshStatus: true });
      })
      .catch((error) => {
        cogoToast.error("Something went wrong!", {
          position: "top-right",
        });
        this.setState({ removeToFav: false });
        this.setState({ PageRefreshStatus: true });
      });
  }; // End RemoveItem

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };

  render() {
    // Authorization
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    const FavouriteLists = this.state.ProductData;
    const MyView = FavouriteLists.map((FavouriteList, i) => {
      return (
        <Col
          key={i.toString()}
          className={`${this.state.mainDiv} mb-2 p-1`}
          xl={2}
          lg={2}
          md={2}
          sm={4}
          xs={6}
        >
          <Card className="card-product">
            <Card.Img
              variant="top"
              src={FavouriteList.image}
              alt="3b-button-3"
            />
            <Card.Body>
              <span className="card-product-title">
                {FavouriteList.product_name}
              </span>
              <br />
              <div className="float-end">
                <Button
                  onClick={this.removeItem}
                  data-code={FavouriteList.product_code}
                  className={`${classes["custom-button"]}`}
                >
                  <i className="fas fa-heart"></i>{" "}
                  {this.state.removeToFav && (
                    <Spinner size="sm" animation="border" role="status" />
                  )}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });

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
              Favourite
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        <div className={`${classes["product-container"]} pt-5 pb-5`}>
          <Container>
            <h2 className="section-header">My Favourite Items</h2>

            {/* Start Product Card */}
            <div className="mx-2">
              <Row>
                {/* Start Skeletal Loading Placeholder */}
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`${this.state.isLoading} mb-2 p-1`}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <div className="ph-item">
                    <div className="ph-col-12">
                      <div className="ph-picture"></div>
                      <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* End Skeletal Loading Placeholder */}
                {MyView}
              </Row>
            </div>
            {/* End Product Card */}
          </Container>
        </div>

        {this.PageRefresh()}
      </Fragment>
    );
  }
}

export default Favorite;
