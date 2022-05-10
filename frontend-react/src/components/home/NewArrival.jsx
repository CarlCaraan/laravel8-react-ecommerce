import React, { Component, Fragment } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./NewArrival.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f57224",
        borderRadius: "50%",
        paddingTop: "1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f57224",
        borderRadius: "50%",
        paddingTop: "1px",
      }}
      onClick={onClick}
    />
  );
}

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.nextButtonHandler = this.nextButtonHandler.bind(this);
    this.prevButtonHandler = this.prevButtonHandler.bind(this);
  }
  nextButtonHandler() {
    this.slider.slickNext();
  }
  prevButtonHandler() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container>
          <h2 className="section-header">
            New Arrivals
            <button
              className={`${classes["next-button"]} btn btn-sm ms-2 float-end`}
              onClick={this.nextButtonHandler}
            >
              <i className="fa fa-angle-right"></i>
            </button>
            <button
              className={`${classes["prev-button"]} btn btn-sm ms-2 float-end`}
              onClick={this.prevButtonHandler}
            >
              <i className="fa fa-angle-left"></i>
            </button>
          </h2>

          {/* Start New Arrival Product Card */}
          <div>
            <Row className="mb-2">
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Slider>
            </Row>
          </div>

          {/* End New Arrival Product Card */}
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default NewArrival;
