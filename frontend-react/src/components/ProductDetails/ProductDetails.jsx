import React, { Component, Fragment } from "react";
import {
  Container,
  Breadcrumb,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import classes from "./ProductDetails.module.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import SuggestedProduct from "./SuggestedProduct";
import ReviewList from "./ReviewList";
import cogoToast from "cogo-toast";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Redirect } from "react-router-dom";

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      previewImage: "0",
      isSize: null,
      isColor: null,
      color: "",
      size: "",
      quantity: "",
      productCode: null,
      addToCart: "Add To Cart",
      PageRefreshStatus: false,
    };
  }

  // imageOnHover(event) {
  //   let imageSrc = event.target.getAttribute("src");
  //   let previewImage = document.getElementById("previewImage");
  //   ReactDOM.findDOMNode(previewImage).setAttribute("src", imageSrc);
  // }

  imageOnHover = (event) => {
    let imageSrc = event.target.getAttribute("src");
    this.setState({ previewImage: imageSrc });
  };

  addToCart = () => {
    let isSize = this.state.isSize;
    let isColor = this.state.isColor;
    let color = this.state.color;
    let size = this.state.size;
    let quantity = this.state.quantity;
    let productCode = this.state.productCode;
    let email = this.props.user.email;

    // All Validation Toast
    if (isColor === "YES" && color.length === 0) {
      cogoToast.error("Please select color", { position: "top-right" });
    } else if (isSize === "YES" && size.length === 0) {
      cogoToast.error("Please select size", { position: "top-right" });
    } else if (quantity.length === 0 || quantity === "0") {
      cogoToast.error("Please select quantity", { position: "top-right" });
    } else if (!localStorage.getItem("token")) {
      cogoToast.warn("Please Login first to be able to add items.", {
        position: "top-right",
      });
    } else {
      this.setState({
        addToCart: "Adding...",
      });

      let MyFormData = new FormData(); // object
      MyFormData.append("color", color);
      MyFormData.append("size", size);
      MyFormData.append("quantity", quantity);
      MyFormData.append("product_code", productCode);
      MyFormData.append("email", email);
      axios
        .post(AppURL.AddToCart, MyFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Product added successfully", {
              position: "top-right",
            });
            this.setState({ addToCart: "Added" });
            this.setState({ PageRefreshStatus: true });
          } else {
            cogoToast.warn("Something went wrong", {
              position: "top-right",
            });
            this.setState({ addToCart: "Add to Cart" });
            this.setState({ PageRefreshStatus: true });
          }
        })
        .catch((error) => {});
    }
  }; // End AddToCart Method

  colorOnChange = (event) => {
    let color = event.target.value;
    // alert(color);
    this.setState({
      color: color,
    });
  };

  sizeOnChange = (event) => {
    let size = event.target.value;
    // alert(size);
    this.setState({
      size: size,
    });
  };

  quantityOnChange = (event) => {
    let quantity = event.target.value;
    // alert(quantity);
    this.setState({
      quantity: quantity,
    });
  };

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };

  PriceOption(price, special_price) {
    if (special_price === "na") {
      return <span className={`${classes["original-price"]}`}>₱{price}</span>;
    } else {
      return (
        <Fragment>
          <span className={`${classes["discounted-price"]}`}>
            ₱{special_price}
          </span>
          <br />
          <span className={`${classes["original-price"]}`}>₱{price}</span>
          <span className={`${classes["discount-percent"]}`}>-29%</span>
        </Fragment>
      );
    }
  }

  render() {
    let ProductAllData = this.props.data;

    // Get Product List
    let image = ProductAllData["productList"][0]["image"];
    if (this.state.previewImage === "0") {
      this.setState({ previewImage: image });
    }

    let title = ProductAllData["productList"][0]["title"];
    let brand = ProductAllData["productList"][0]["brand"];
    let category = ProductAllData["productList"][0]["category"];
    let subcategory = ProductAllData["productList"][0]["subcategory"];
    let price = ProductAllData["productList"][0]["price"];
    let special_price = ProductAllData["productList"][0]["special_price"];
    let product_code = ProductAllData["productList"][0]["product_code"];
    // let remark = ProductAllData["productList"][0]["remark"];
    // let star = ProductAllData["productList"][0]["star"];

    // Get Product Details
    let short_description =
      ProductAllData["productDetails"][0]["short_description"];
    let long_description =
      ProductAllData["productDetails"][0]["long_description"];
    let image_one = ProductAllData["productDetails"][0]["image_one"];
    let image_two = ProductAllData["productDetails"][0]["image_two"];
    let image_three = ProductAllData["productDetails"][0]["image_three"];
    let color = ProductAllData["productDetails"][0]["color"];
    let size = ProductAllData["productDetails"][0]["size"];
    let seller = ProductAllData["productDetails"][0]["seller"];
    let product_id = ProductAllData["productDetails"][0]["product_id"];

    // Color Div
    var ColorDiv = "d-none";
    if (color !== "na") {
      let ColorArray = color.split(",");
      var ColorOption = ColorArray.map((ColorList, i) => {
        return (
          <option key={i.toString()} value={ColorList}>
            {ColorList}
          </option>
        );
      });
      ColorDiv = "";
    } else {
      ColorDiv = "d-none";
    }

    // Size Div
    var SizeDiv = "d-none";
    if (size !== "na") {
      let SizeArray = size.split(",");
      var SizeOption = SizeArray.map((SizeList, i) => {
        return (
          <option key={i.toString()} value={SizeList}>
            {SizeList}
          </option>
        );
      });
      SizeDiv = "";
    } else {
      SizeDiv = "d-none";
    }

    // If Condition
    if (this.state.isSize === null) {
      if (size !== "na") {
        this.setState({ isSize: "YES" });
      } else {
        this.setState({ isSize: "NO" });
      }
    }
    if (this.state.isColor === null) {
      if (color !== "na") {
        this.setState({ isColor: "YES" });
      } else {
        this.setState({ isColor: "NO" });
      }
    }
    if (this.state.productCode === null) {
      this.setState({ productCode: product_code });
    }

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
              className={`${classes["breadcrumb-item"]}`}
              href={"/productcategory/" + category}
            >
              {category}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href={"/productsubcategory/" + category + "/" + subcategory}
            >
              {subcategory}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              {title}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Product Details */}
        <div className={`${classes["product-container"]}`}>
          <Container>
            <Card className={`${classes["custom-card"]}`}>
              <Card.Body className={`${classes["card-body"]}`}>
                <Row>
                  {/* Start Left Card */}
                  <Col
                    xl={9}
                    lg={9}
                    md={12}
                    sm={12}
                    className={`${classes["left-card"]} py-2`}
                  >
                    <Row>
                      {/* Start Image Section */}
                      <Col xl={5} lg={5} md={12} sm={12}>
                        <InnerImageZoom
                          id="previewImage"
                          zoomType="hover"
                          hideHint={true}
                          src={this.state.previewImage}
                          zoomSrc={this.state.previewImage}
                          alt="image_main"
                        />
                        <Row className="pt-1 px-3">
                          <Col className="p-0 m-0">
                            <img
                              onMouseOver={this.imageOnHover}
                              className={`${classes["small-image"]} img-fluid`}
                              src={image_one}
                              alt="image_one"
                            />
                          </Col>
                          <Col className="p-0 m-0">
                            <img
                              onMouseOver={this.imageOnHover}
                              className={`${classes["small-image"]} img-fluid`}
                              src={image_two}
                              alt="image_two"
                            />
                          </Col>
                          <Col className="p-0 m-0">
                            <img
                              onMouseOver={this.imageOnHover}
                              className={`${classes["small-image"]} img-fluid`}
                              src={image_three}
                              alt="image_three"
                            />
                          </Col>
                        </Row>
                      </Col>
                      {/* End Image Section */}

                      {/* Start Product Specifications */}
                      <Col xl={7} lg={7} md={12} sm={12}>
                        <div className={`${classes["product-name"]}`}>
                          {title}
                          <i
                            className={`${classes["custom-icon"]} fas fa-heart float-end`}
                          ></i>
                          <br />
                          <div className={`${classes["brand-wrapper"]} mt-2`}>
                            Brand:{" "}
                            <span className={`${classes["brand-text"]}`}>
                              {brand} | {product_code}
                            </span>
                          </div>
                        </div>
                        <div className={`${classes["price-wrapper"]}`}>
                          {this.PriceOption(price, special_price)}
                        </div>

                        <Row>
                          <Col sm={12}>
                            <Form.Group
                              className={`${classes["choose-color-wrapper"]} ${ColorDiv}`}
                            >
                              <Form.Label
                                className={`${classes["form-label"]}`}
                              >
                                Choose Color
                              </Form.Label>
                              <br />
                              <select
                                onChange={this.colorOnChange}
                                className={`${classes["custom-select"]} form-select`}
                              >
                                <option value="na">Select</option>
                                {ColorOption}
                              </select>
                            </Form.Group>
                          </Col>
                          <Col sm={12}>
                            <Form.Group
                              className={`${classes["choose-color-wrapper"]} ${SizeDiv}`}
                            >
                              <Form.Label
                                className={`${classes["form-label"]}`}
                              >
                                Choose Size
                              </Form.Label>
                              <br />
                              <select
                                onChange={this.sizeOnChange}
                                className={`${classes["custom-select"]} form-select`}
                              >
                                <option value="na">Select</option>
                                {SizeOption}
                              </select>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group
                          className={`${classes["choose-color-wrapper"]}`}
                        >
                          <Form.Label className={`${classes["form-label"]}`}>
                            Quantity
                          </Form.Label>
                          <input
                            onChange={this.quantityOnChange}
                            type="number"
                            className={`${classes["quantity-input"]} form-control`}
                            placeholder="0"
                            min="0"
                          ></input>
                        </Form.Group>

                        <Row className={`${classes["button-wrapper"]}`}>
                          <Col
                            xl={6}
                            lg={6}
                            md={6}
                            sm={12}
                            className="px-1 mb-2"
                          >
                            <Button className={`${classes["buy-button"]}`}>
                              Buy Now
                            </Button>
                          </Col>
                          <Col
                            xl={6}
                            lg={6}
                            md={6}
                            sm={12}
                            className="px-1 mb-2"
                          >
                            <Button
                              onClick={this.addToCart}
                              className={`${classes["addtocart-button"]}`}
                            >
                              {this.state.addToCart}
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      {/* End Product Specifications */}
                    </Row>
                  </Col>
                  {/* End Left Card */}

                  {/* Start Right Card */}
                  <Col
                    xl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    className={`${classes["right-card"]} py-2`}
                  >
                    <div className={`${classes["right-card-wrapper"]} mt-2`}>
                      <span className={`${classes["right-card-headings"]}`}>
                        Return & Warranty
                      </span>
                      <div className="hstack gap-3 mt-2">
                        <i
                          className={`${classes["custom-icon"]} fas fa-undo`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          7 Days Money Back Guarantee
                          <br />
                          <span className={`${classes["right-card-sub-body"]}`}>
                            Change of mind is not applicable
                          </span>
                        </span>
                      </div>
                      <div className="hstack gap-3 mt-3">
                        <i
                          className={`${classes["custom-icon"]} fas fa-shield-alt`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          7 Days Local Supplier Refund Warranty
                        </span>
                      </div>
                    </div>
                    <div className={`${classes["right-card-wrapper"]} mt-2`}>
                      <span className={`${classes["right-card-headings"]}`}>
                        Sold by
                      </span>
                      <div className="hstack gap-3">
                        <i
                          className={`${classes["custom-icon"]} fas fa-store`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          {seller}
                        </span>
                      </div>
                    </div>

                    <div className={`${classes["right-card-wrapper"]} mt-2`}>
                      <span className={`${classes["right-card-headings"]}`}>
                        About
                      </span>
                      <div className="hstack gap-3">
                        <i
                          className={`${classes["custom-icon"]} fas fa-info ms-1 me-2`}
                        ></i>
                        <span className={`${classes["right-card-body"]}`}>
                          {short_description}
                        </span>
                      </div>
                    </div>
                  </Col>
                  {/* End Right Card */}
                </Row>
              </Card.Body>
            </Card>

            {/* Start Product Description */}
            <Card className={`${classes["custom-card"]}`}>
              <Card.Body className={`${classes["card-body"]}`}>
                <Row className="bg-white">
                  <Col className={`${classes["description-header"]}`}>
                    Product Details of {title}
                  </Col>
                </Row>
                <Row>
                  <Col className={`${classes["description-body"]}`}>
                    {long_description}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* End Product Description */}

            {/* Start Product Rating */}
            <ReviewList id={product_id} product_name={title} />
            {/* End Product Rating */}
          </Container>
        </div>
        {/* End Product Details */}

        <SuggestedProduct subcategory={subcategory} />

        {this.PageRefresh()}
      </Fragment>
    );
  }
}

export default ProductDetails;
