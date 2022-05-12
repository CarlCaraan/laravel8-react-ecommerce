import React, { Component, Fragment } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./NavMenuDesktop.module.css";

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["sticky"]}`}>
          {/* Small Navigation */}
          <div className={`${classes["nav-mini"]} w-100`}>
            <Navbar className="py-0" expand="lg">
              <Container>
                <div className={`${classes["mini-nav-link-wrapper"]} ms-auto`}>
                  <Link className={`${classes["first-link"]}`} to="/">
                    save more on app
                  </Link>
                  <Link className={`${classes["second-link"]}`} to="/">
                    sell on lazapee
                  </Link>
                  <Link className={`${classes["mini-nav-link"]}`} to="/">
                    customer care
                  </Link>
                  <Link className={`${classes["mini-nav-link"]}`} to="/">
                    notifications
                  </Link>
                  <Link className={`${classes["mini-nav-link"]}`} to="/">
                    login
                  </Link>
                </div>
              </Container>
            </Navbar>
          </div>

          {/* Start Large Navigation */}
          <div className={`${classes["nav-large"]} bg-white w-100`}>
            <Container>
              <Navbar expand="lg">
                <Container className="px-0" fluid>
                  <Navbar.Brand
                    className={`${classes["navbar-logo"]} mt-2`}
                    href="/"
                  >
                    <img
                      src={require("../../assets/images/common/lazapee.png")}
                      width="125"
                      alt="lazapee"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="my-2 my-lg-0"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    ></Nav>
                    <Form className="d-flex">
                      <InputGroup>
                        <FormControl
                          type="search"
                          placeholder="Search in Lazapee"
                          className={`${classes["search-input"]}`}
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                        <Button
                          id="button-addon1"
                          className={`${classes["search-button"]}`}
                          variant="outline-success"
                        >
                          <i className="fas fa-search"></i>
                        </Button>
                      </InputGroup>
                    </Form>
                    <div className={`${classes["nav-cart"]}`}>
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className={`${classes["nav-cash-in"]}`}>
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/common/cash-in.png")}
                        width="187px"
                        alt="cash-in"
                      />
                    </div>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              {/* End Large Navigation */}
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
