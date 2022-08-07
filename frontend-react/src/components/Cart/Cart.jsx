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

  render() {
    const CartLists = this.state.ProductData;
    const MyView = CartLists.map((CartList, i) => {
      return (
        <Row key={i.toString()}>
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
                Price:{" "}
                <span className={`${classes["orange-text"]}`}>
                  {CartList.unit_price}
                </span>
              </span>
              <br />
              <span className={`${classes["product-price"]}`}>
                Total Price:{" "}
                <span className={`${classes["orange-text"]}`}>
                  {CartList.total_price}
                </span>
              </span>
            </div>
          </Col>
          <Col xl={4} lg={3} md={12} sm={12}>
            <Row>
              <Col>
                <Form.Group className={`${classes["choose-color-wrapper"]}`}>
                  <Form.Label className={`${classes["form-label"]}`}>
                    Quantity
                  </Form.Label>
                  <input
                    type="number"
                    className={`${classes["quantity-input"]} form-control w-100`}
                    placeholder="0"
                    min="0"
                  ></input>
                </Form.Group>
              </Col>
              <Col>
                <i className={`${classes["custom-icon"]} fas fa-trash`}></i>
              </Col>
            </Row>
          </Col>
          <hr />
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
                    {/* Start Product List */}
                    {MyView}
                    {/* End Product List */}
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
                    <span className={`${classes["product-total-items"]}`}>
                      Total Items: 05
                    </span>
                    <br />
                    <span className={`${classes["product-total-price"]}`}>
                      Total Price:{" "}
                      <span className={`${classes["orange-text"]}`}>
                        15,990
                      </span>
                    </span>
                    <hr />
                    <p className={`${classes["vat-text"]}`}>
                      VAT included, where applicable
                    </p>
                    <Button className={`${classes["checkout-button"]}`}>
                      PROCEED TO CHECKOUT
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* End Cart Section */}
      </Fragment>
    );
  }
}

export default Cart;
