import React, { Component, Fragment } from "react";
import classes from "./ReviewList.module.css";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

class ReviewList extends Component {
  constructor() {
    super();
    this.state = { ReviewData: [] };
  }

  componentDidMount() {
    let id = this.props.id;
    axios
      .get(AppURL.ReviewList(id))
      .then((response) => {
        this.setState({
          ReviewData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const ReviewLists = this.state.ReviewData;
    if (ReviewLists.length > 0) {
      const MyView = ReviewLists.map((ReviewList, i) => {
        if (ReviewList.reviewer_rating === "1") {
          return (
            <Row key={i.toString()}>
              <Col className={`${classes["review-body"]}`}>
                <i className="fas fa-star text-warning"></i>

                <div>
                  <span className={`${classes["review-name"]}`}>
                    {ReviewList.reviewer_name}{" "}
                    <span className={`${classes["text-verified"]}`}>
                      <i className="fas fa-check-circle"></i> Verified Purchase
                    </span>
                  </span>
                </div>
                <div className={`${classes["review-text-body"]}`}>
                  {ReviewList.reviewer_comments}
                </div>
              </Col>
            </Row>
          );
        } else if (ReviewList.reviewer_rating === "2") {
          return (
            <Row key={i.toString()}>
              <Col className={`${classes["review-body"]}`}>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <div>
                  <span className={`${classes["review-name"]}`}>
                    {ReviewList.reviewer_name}{" "}
                    <span className={`${classes["text-verified"]}`}>
                      <i className="fas fa-check-circle"></i> Verified Purchase
                    </span>
                  </span>
                </div>
                <div className={`${classes["review-text-body"]}`}>
                  {ReviewList.reviewer_comments}
                </div>
              </Col>
            </Row>
          );
        } else if (ReviewList.reviewer_rating === "3") {
          return (
            <Row key={i.toString()}>
              <Col className={`${classes["review-body"]}`}>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <div>
                  <span className={`${classes["review-name"]}`}>
                    {ReviewList.reviewer_name}{" "}
                    <span className={`${classes["text-verified"]}`}>
                      <i className="fas fa-check-circle"></i> Verified Purchase
                    </span>
                  </span>
                </div>
                <div className={`${classes["review-text-body"]}`}>
                  {ReviewList.reviewer_comments}
                </div>
              </Col>
            </Row>
          );
        } else if (ReviewList.reviewer_rating === "4") {
          return (
            <Row key={i.toString()}>
              <Col className={`${classes["review-body"]}`}>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <div>
                  <span className={`${classes["review-name"]}`}>
                    {ReviewList.reviewer_name}{" "}
                    <span className={`${classes["text-verified"]}`}>
                      <i className="fas fa-check-circle"></i> Verified Purchase
                    </span>
                  </span>
                </div>
                <div className={`${classes["review-text-body"]}`}>
                  {ReviewList.reviewer_comments}
                </div>
              </Col>
            </Row>
          );
        } else if (ReviewList.reviewer_rating === "5") {
          return (
            <Row key={i.toString()}>
              <Col className={`${classes["review-body"]}`}>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <div>
                  <span className={`${classes["review-name"]}`}>
                    {ReviewList.reviewer_name}{" "}
                    <span className={`${classes["text-verified"]}`}>
                      <i className="fas fa-check-circle"></i> Verified Purchase
                    </span>
                  </span>
                </div>
                <div className={`${classes["review-text-body"]}`}>
                  {ReviewList.reviewer_comments}
                </div>
              </Col>
            </Row>
          );
        } else {
          return null;
        } // End else
      }); // End Map
      return (
        <Fragment>
          <Card className={`${classes["custom-card"]}`}>
            <Card.Body className={`${classes["card-body"]}`}>
              <Row className="bg-white">
                <Col className={`${classes["review-header"]}`}>
                  Ratings & Review of {this.props.product_name}
                </Col>
              </Row>
              {MyView}
            </Card.Body>
          </Card>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Card className={`${classes["custom-card"]}`}>
            <Card.Body className={`${classes["card-body"]}`}>
              <Row className="bg-white">
                <Col className={`${classes["review-header"]}`}>
                  Ratings & Review of {this.props.product_name}
                </Col>
              </Row>
              <Row>
                <Col>There is no Product Review yet.</Col>
              </Row>
            </Card.Body>
          </Card>
        </Fragment>
      );
    }
  }
}

export default ReviewList;
