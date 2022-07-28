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
import { Link, Navigate } from "react-router-dom";
import classes from "./NavMenuDesktop.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      SearchKey: "",
      SearchRedirectStatus: false,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  SearchOnChange(event) {
    let enteredSearchKey = event.target.value;
    // alert(enteredSearchKey);
    this.setState({
      SearchKey: enteredSearchKey,
    });
  }
  searchButtonHandler() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({ SearchRedirectStatus: true });
    } else {
      toast.error("Search field must be greater than 2 characters!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Navigate to={"/productbysearch/" + this.state.SearchKey} />;
    }
  }

  render() {
    return (
      <Fragment>
        {/* Start React Toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* End React Toastify */}
        {this.searchRedirect()}

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
                  <Link className={`${classes["mini-nav-link"]}`} to="/contact">
                    customer care
                  </Link>
                  <Link className={`${classes["mini-nav-link"]}`} to="/">
                    wishlist
                  </Link>
                  <Link
                    className={`${classes["mini-nav-link"]}`}
                    to="/notification"
                  >
                    notifications
                  </Link>
                  <Link className={`${classes["mini-nav-link"]}`} to="/login">
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
                  <Navbar.Brand className={`${classes["navbar-logo"]} mt-2`}>
                    <Link to="/">
                      <img
                        src={require("../../assets/images/common/header/lazapee.png")}
                        width="125"
                        alt="lazapee"
                      />
                    </Link>
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
                          type="text"
                          placeholder="Search in Lazapee"
                          className={`${classes["search-input"]}`}
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                          onChange={this.SearchOnChange}
                        />
                        <Button
                          id="button-addon1"
                          className={`${classes["search-button"]}`}
                          variant="outline-success"
                          onClick={this.searchButtonHandler}
                        >
                          <i className="fas fa-search"></i>
                        </Button>
                      </InputGroup>
                    </Form>
                    <Link to="/cart" className={`${classes["nav-cart"]}`}>
                      <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <div className={`${classes["nav-cash-in"]}`}>
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/common/header/cash-in.png")}
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
