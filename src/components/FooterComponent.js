import {
  Copyright,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Logo from "../assets/logo.png";

class FooterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="FooterMainDiv">
          <Container fluid>
            <Row>
              <Col sm>
                <div>
                  <img
                    src={Logo}
                    className="img-fluid"
                    style={{ width: "160px" }}
                  />
                </div>
              </Col>
            </Row>
            <div className="FooterSocialLinks">
              <Row>
                <Col sm></Col>
                <Col sm>
                  <Row>
                    <Col sm xs>
                      <Facebook />
                    </Col>
                    <Col sm xs>
                      <Instagram />
                    </Col>
                    <Col sm xs>
                      <LinkedIn />
                    </Col>
                    <Col sm xs>
                      <Twitter />
                    </Col>
                  </Row>
                </Col>
                <Col sm></Col>
              </Row>
            </div>
            <div className="FooterCopyRightDiv">
              <Container>
                <hr />

                <h6>
                  <Copyright /> 2021 - 2022
                </h6>
              </Container>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterComponent;
