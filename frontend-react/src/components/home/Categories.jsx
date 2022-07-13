import React, { Component, Fragment } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import classes from "./Categories.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
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
  }

  render() {
    const CategoryList = this.state.MenuData;
    const MyView = CategoryList.map((CategoryList, i) => {
      return (
        <Col
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          className="p-0"
          key={i.toString()}
        >
          <Link to={"/productcategory/" + CategoryList.category_name}>
            <Card
              className={`${classes["card-categories"]} py-3 border border-top-0 border-start-0`}
            >
              <Container>
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={CategoryList.category_image}
                  alt="category-1"
                />
              </Container>
              <Card.Body className="text-center px-0 pt-2 pb-0">
                <span className="card-product-title">
                  {CategoryList.category_name}
                </span>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container>
          <span className="section-header">Categories</span>
          <Row className="m-0">
            <Col className="p-0" xl={12} lg={12} md={12} sm={12} xs={12}>
              <Row className="p-3">{MyView}</Row>
            </Col>
          </Row>
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default Categories;
