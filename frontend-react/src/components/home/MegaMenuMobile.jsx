import React, { Fragment, useState } from "react";
import { Offcanvas, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./MegaMenuMobile.module.css";
import { useEffect } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";

function MegaMenuMobile({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const [MenuData, setMenuData] = useState([]);
  const [loaderDiv, setLoaderDiv] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  useEffect(() => {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data);
        setLoaderDiv("d-none");
        setMainDiv("");
      })
      .catch((error) => {});
  }, []);
  const CategoryLists = MenuData;
  const MyView = CategoryLists.map((CategoryList, i) => (
    <Accordion key={i.toString()} className={mainDiv}>
      <Accordion.Item className={`${classes["off-canvas-body"]}`} eventKey="0">
        <Accordion.Header>
          <span className={`${classes["accordion-button"]}`}>
            {CategoryList.category_name}
          </span>
        </Accordion.Header>
        <Accordion.Body className="px-0 pb-0">
          <div className={`${classes["megadrop"]}`}>
            <ul>
              {CategoryList.subcategory_name.map((SubcategoryList, i) => {
                return (
                  <li key={i.toString()}>
                    <Link to="#">{SubcategoryList.subcategory_name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));

  return (
    <Fragment>
      <div
        className={`${classes["categories-button"]} bg-white`}
        onClick={toggleShow}
      >
        <span className="me-2">
          <span className={`${classes["icon-wrapper"]}`}>
            <i className="fas fa-th-large"></i>
          </span>
          Categories
        </span>
      </div>
      <Offcanvas
        className={`${classes["off-canvas-custom"]}`}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* ========= Start Accordion ========= */}
          {/* Start Skeletal Loading Div */}
          <div className={loaderDiv}>
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
          {/* ========= End Accordion ========= */}
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
}

export default MegaMenuMobile;
