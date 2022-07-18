import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./MegaMenuDesktop.module.css";

class MegaMenu extends Component {
  constructor(props) {
    super();
  }

  render() {
    const CategoryList = this.props.data;
    const MyView = CategoryList.map((CategoryList, i) => {
      return (
        <li key={i.toString()} className={this.props.mainDiv}>
          {CategoryList.category_name}
          <i className={`${classes["left-icon"]} fas fa-chevron-right`}></i>
          {/* Start Subcategory */}
          <div className={`${classes["megadrop"]}`}>
            <ul>
              {CategoryList.subcategory_name.map((SubcategoryList, i) => {
                return (
                  <li key={i.toString()}>
                    <Link
                      to={
                        "/productsubcategory/" +
                        CategoryList.category_name +
                        "/" +
                        SubcategoryList.subcategory_name
                      }
                    >
                      {SubcategoryList.subcategory_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* End Subcategory */}
        </li>
      );
    });

    return (
      <Fragment>
        <ul className={`${classes["menu"]} mb-0`}>
          {/* Start Skeletal Loading Div */}
          <div className={this.props.loaderDiv}>
            <div className="ph-item">
              <div className="ph-col-12">
                <div className="ph-row">
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                </div>
              </div>
            </div>
          </div>
          {/* End Skeletal Loading Div */}
          {MyView}
        </ul>
      </Fragment>
    );
  }
}

export default MegaMenu;
