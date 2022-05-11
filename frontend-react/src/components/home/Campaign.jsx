import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import classes from "./Campaign.module.css";

class Campaign extends Component {
  state = {
    isCloseBtnClick: true,
  };

  closeBtnHandler = () => {
    this.setState({ isCloseBtnClick: false });
    console.log("test");
  };

  render() {
    return (
      <Fragment>
        {this.state.isCloseBtnClick && (
          <div>
            <Container>
              <img
                className="w-100"
                src="https://icms-image.slatic.net/images/ims-web/00da88db-d278-443e-b208-99cfa4e2bafa.jpg"
                alt=""
              />
              <span
                className={`${classes["campaign-button"]} float-end`}
                onClick={this.closeBtnHandler}
              >
                <i className="fas fa-times"></i>
              </span>
            </Container>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Campaign;
