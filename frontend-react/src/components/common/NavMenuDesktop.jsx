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
import classes from "./NavMenuDesktop.module.css";

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-white w-100">
          <Container>
            {/* Small Navigation */}

            {/* Start Large Navigation */}
            <Navbar className="pb-4" expand="lg">
              <Container className="px-0" fluid>
                <Navbar.Brand className={`${classes["navbar-logo"]}`} href="#">
                  <img
                    src={require("../../assets/images/common/lazapee.png")}
                    width="125"
                    alt=""
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
                        <i class="fas fa-search"></i>
                      </Button>
                    </InputGroup>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* End Large Navigation */}
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
