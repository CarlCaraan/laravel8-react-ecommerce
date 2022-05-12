import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./HomeSlider.module.css";

class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      cssEase: "linear",
      arrows: false,
      dotsClass: `${classes["slick-dots-thumb"]}`,
      customPaging: function (i) {
        return (
          <span>
            <i className="fas fa-circle"></i>
          </span>
        );
      },
    };

    return (
      <Fragment>
        <Slider {...settings}>
          <img
            className="img-fluid"
            src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/94ad588f-806e-4a86-aeb6-29f6bbf3164e.jpg_1200x1200q90.jpg_.webp"
            alt=""
          />
          <img
            className="img-fluid"
            src="https://icms-image.slatic.net/images/ims-web/37d0df6a-0fe5-4d1c-b482-262233a54879.jpg"
            alt=""
          />
          <img
            className="img-fluid"
            src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/5c3e46db-e075-4e2d-92f7-05f69e037997.jpg_1200x1200q90.jpg_.webp"
            alt=""
          />
          <img
            className="img-fluid"
            src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/90831fb5-fb26-4550-bfad-6a1ebef50261.jpg_1200x1200q90.jpg_.webp"
            alt=""
          />
        </Slider>
      </Fragment>
    );
  }
}

export default HomeSlider;
