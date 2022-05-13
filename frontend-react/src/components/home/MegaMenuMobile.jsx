import React, { Fragment, useState } from "react";
import { Offcanvas, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./MegaMenuMobile.module.css";

function MegaMenuMobile({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

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
          {/* Start Accordion */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item
              className={`${classes["off-canvas-body"]}`}
              eventKey="0"
            >
              <Accordion.Header>
                <span className={`${classes["accordion-button"]}`}>
                  Electronic Device
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-0">
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* End Accordion */}
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
}

export default MegaMenuMobile;
