import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./MegaMenuDesktop.module.css";

class MegaMenu extends Component {
  render() {
    return (
      <Fragment>
        <ul className={`${classes["menu"]} mb-0`}>
          <li>
            Electronic Device
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}>
              <ul>
                <li>
                  <Link to="#">Mobiles</Link>
                </li>
                <li>
                  <Link to="#">Desktop</Link>
                </li>
                <li>
                  <Link to="#">Laptop</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            Electronic Accessories
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}></div>
          </li>

          <li>
            TV & Home Appliances
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}></div>
          </li>
          <li>
            Health & Beauty
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}></div>
          </li>
          <li>
            Babies & Toys
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}></div>
          </li>
          <li>
            Groceries & Pets
            <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
            <div className={`${classes["megadrop"]}`}></div>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default MegaMenu;
