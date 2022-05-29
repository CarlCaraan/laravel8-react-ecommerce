import React, { Component, Fragment } from "react";
import { Card, Container, Breadcrumb, Row, Col } from "react-bootstrap";
import classes from "./About.module.css";

class About extends Component {
  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              About
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        <div className="bg-white pt-5 pb-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>About Us</h1>
            <Row>
              <Col xl={6}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      A 22-year-old Full Stack Web Developer based in Laguna,
                      Philippines with background knowledge mostly in React and
                      Laravel. Skilled in Frontend technologies such as Html,
                      CSS, Javascript, Bootstrap, and Backend technologies such
                      as Php, Python, NodeJs, and MySQL. Learning a variety of
                      scripting languages and technology stacks is one of my
                      strengths. I am also a hard worker and a team player. I am
                      looking for a challenging opportunity that will enable me
                      to use my skills and abilities to achieve a challenging
                      goal.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </Fragment>
    );
  }
}

export default About;
