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

    const SlidersList = this.props.data;
    const MyView = SlidersList.map((SliderList, i) => {
      return (
        <img
          key={i.toString()}
          className="img-fluid"
          src={SliderList.slider_image}
          alt={SliderList.id}
          loading="lazy"
        />
      );
    });

    return (
      <Fragment>
        <Slider {...settings}>{MyView}</Slider>
      </Fragment>
    );
  }
}

export default HomeSlider;
