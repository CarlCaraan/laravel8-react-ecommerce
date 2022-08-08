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
import classes from "./Cart.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import cogoToast from "cogo-toast";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.CartList(this.props.user.email))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  removeItem = (id) => {
    axios
      .get(AppURL.RemoveCartList(id))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Cart Item removed Successfully", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        } else {
          cogoToast.error("Something went wrong!", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        }
      })
      .catch((error) => {});
  }; // End removeItem Method

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };

  ItemPlus = (id, quantity, price) => {
    axios
      .get(AppURL.CartItemPlus(id, quantity, price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Item Quantity Increased", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        } else {
          cogoToast.error("Something went wrong!", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        }
      })
      .catch((error) => {});
  }; // End ItemPlus Method

  ItemMinus = (id, quantity, price) => {
    axios
      .get(AppURL.CartItemMinus(id, quantity, price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Item Quantity Decreased", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        } else {
          cogoToast.error("Something went wrong!", {
            position: "top-right",
          });
          this.setState({
            PageRefreshStatus: true,
          });
        }
      })
      .catch((error) => {});
  }; // End ItemMinus Method

  render() {
    const CartLists = this.state.ProductData;
    let totalPriceSum = 0;
    let totalItems = 0;

    const MyView = CartLists.map((CartList, i) => {
      totalPriceSum = totalPriceSum + parseInt(CartList.total_price);
      totalItems = totalItems + 1;
      return (
        <Row className={this.state.mainDiv} key={i.toString()}>
          <Col xl={2} lg={3} md={12} sm={12}>
            <img
              className={`${classes["product-image"]}`}
              src={CartList.image}
              alt="product1"
              width="100px"
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div>
              <span className={`${classes["product-name"]}`}>
                {CartList.product_name}
              </span>
              <br />
              <span className={`${classes["product-quantity"]}`}>
                Quantity: {CartList.quantity}
              </span>
              <br />
              <span className={`${classes["product-price"]}`}>
                Price: ₱
                <span className={`${classes["orange-text"]}`}>
                  {CartList.unit_price}
                </span>
              </span>
              <br />
              <span className={`${classes["product-price"]}`}>
                Total Price: ₱
                <span className={`${classes["orange-text"]}`}>
                  {CartList.total_price}
                </span>
              </span>
            </div>
          </Col>
          <Col xl={4} lg={3} md={12} sm={12}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={`${classes["form-label"]}`}>
                    Quantity
                  </Form.Label>
                  <br />
                  <Button
                    onClick={() =>
                      this.ItemPlus(
                        CartList.id,
                        CartList.quantity,
                        CartList.unit_price
                      )
                    }
                    className={`${classes["custom-increment-btn"]} me-1`}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                  <Button
                    onClick={() =>
                      this.ItemMinus(
                        CartList.id,
                        CartList.quantity,
                        CartList.unit_price
                      )
                    }
                    className={`${classes["custom-increment-btn"]}`}
                  >
                    <i className="fas fa-minus"></i>
                  </Button>
                </Form.Group>
              </Col>
              <Col>
                <i
                  onClick={() => this.removeItem(CartList.id)}
                  className={`${classes["custom-icon"]} fas fa-trash`}
                ></i>
              </Col>
            </Row>
          </Col>
          <hr className="mt-3" />
        </Row>
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
              My Cart
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Cart Section */}
        <div className={`${classes["cart-container"]} py-5`}>
          <Container>
            <Row>
              <Col xl={9} lg={9} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Header className="bg-white p-0">
                    <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                      My Cart
                    </h1>
                  </Card.Header>
                  <Card.Body>
                    {/* Start Skeleton Placeholder */}
                    <div className={`${this.state.isLoading} ph-item`}>
                      <div className="ph-col-2">
                        <div className="ph-picture"></div>
                      </div>
                      <div className="ph-col-10">
                        <div className="ph-row">
                          <div className="ph-col-4 big"></div>
                          <div className="ph-col-4 empty big"></div>
                          <div className="ph-col-4 big"></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>
                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>
                          <div className="ph-col-4"></div>
                          <div className="ph-col-4 empty"></div>
                          <div className="ph-col-4 "></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-6 empty"></div>

                          <div className="ph-col-4"></div>
                          <div className="ph-col-6 empty"></div>
                        </div>
                      </div>
                    </div>
                    {/* End Skeleton Placeholder */}

                    {MyView}
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Header className="bg-white p-0">
                    <h1 className={`${classes["card-header"]} ps-3 m-0`}>
                      Order Summary
                    </h1>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-2">
                        <Form.Control
                          className={`${classes["checkout-custom-input"]}`}
                          type="text"
                          placeholder="City"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Select
                          aria-label="payment"
                          className={`${classes["checkout-custom-input"]} text-muted`}
                        >
                          <option disabled selected>
                            Select Payment Method
                          </option>
                          <option value="1">Cash on Delivery</option>
                          <option value="2">Stripe</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Control
                          className={`${classes["checkout-custom-input"]}`}
                          type="text"
                          placeholder="Full Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Control
                          className={`${classes["checkout-custom-input"]}`}
                          type="text"
                          placeholder="Address"
                          as="textarea"
                          rows={2}
                        />
                      </Form.Group>

                      <span className={`${classes["product-total-items"]}`}>
                        Total Items: {totalItems}
                      </span>
                      <br />
                      <span className={`${classes["product-total-price"]}`}>
                        Total Price: ₱
                        <span className={`${classes["orange-text"]}`}>
                          {totalPriceSum}
                        </span>
                      </span>
                      <hr />
                      <p className={`${classes["vat-text"]}`}>
                        VAT included, where applicable
                      </p>
                      <Button className={`${classes["checkout-button"]}`}>
                        PROCEED TO CHECKOUT
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* End Cart Section */}

        {this.PageRefresh()}
      </Fragment>
    );
  }
}

export default Cart;
