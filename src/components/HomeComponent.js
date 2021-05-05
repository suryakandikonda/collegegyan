import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import Banner from "../assets/banner.jpeg";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import { Avatar, Dialog, DialogTitle } from "@material-ui/core";

import Logo from "../assets/logo.png";
import { Search } from "@material-ui/icons";
import SearchOptionsComponent from "./SearchOptionsComponent";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      streamSelected: false,
      feesSelected: false,
      collegeTypeSelected: false,

      //Dialogs
      streamDialogOpen: false,
      collegeTypeDialogOpen: false,

      searchLocation: "",
      searchStream: "",
      searchFees: "",
      searchCollegeType: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDialogOpen = (key) => {
    this.setState({
      [key]: true,
    });
  };

  handleDialogClose = (key) => {
    this.setState({
      [key]: false,
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSearchSelect = (key) => {
    this.setState({
      locationSelected: false,
      streamSelected: false,
      feesSelected: false,
      collegeTypeSelected: false,
    });
    if (key === "streamSelected") {
      this.handleDialogOpen("streamDialogOpen");
    }
    if (key === "collegeTypeSelected") {
      this.handleDialogOpen("collegeTypeDialogOpen");
    }
    this.setState({
      [key]: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.state.streamDialogOpen}
          onClose={() => this.handleDialogClose("streamDialogOpen")}
        >
          <DialogTitle>Select a Stream</DialogTitle>
        </Dialog>
        <Dialog
          open={this.state.collegeTypeDialogOpen}
          onClose={() => this.handleDialogClose("collegeTypeDialogOpen")}
        >
          <DialogTitle>Select College Type</DialogTitle>
        </Dialog>
        <HeaderComponent />
        <div>
          <div className="HomeBannerMainDiv">
            <img
              src={Banner}
              alt="Snow"
              style={{ width: "100%", height: "90vh" }}
            />
            <div className="centered">
              <Container>
                <SearchOptionsComponent />
              </Container>
            </div>
            <div class="top-left">
              <img src={Logo} className="img-fluid" />
              {/* <h1 className="h1">
                College <br /> Gyan
              </h1> */}
              <h6>Caption here</h6>
            </div>
          </div>

          <Container>
            <div className="HomeContentMainDiv">
              <div className="HomeContentDiv">
                <div className="HomeContentTitle">
                  <h1 className="h1">
                    <b>Featured Colleges</b>
                  </h1>
                </div>
                <div className="HomeItemsMainDiv">
                  <Row>
                    <Col sm>
                      <div className="HomeItemDiv">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImg"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Indian Indian of Technology, Mumbai</b>
                        </h5>
                        <p>Caption here</p>
                      </div>
                    </Col>
                    <Col sm>
                      <div className="HomeItemDiv">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImg"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Indian Indian of Technology, Mumbai</b>
                        </h5>
                        <p>Caption here</p>
                      </div>
                    </Col>
                    <Col sm>
                      <div className="HomeItemDiv">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImg"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Indian Indian of Technology, Mumbai</b>
                        </h5>
                        <p>Caption here</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="HomeContentDiv">
                <div className="HomeContentTitle">
                  <h1 className="h1">
                    <b>Testimonials</b>
                  </h1>
                </div>
                <div className="HomeItemsMainDiv">
                  <Row>
                    <Col sm>
                      <div className="HomeItemDivTesti">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImgTesti"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Bob Alice</b>
                        </h5>
                        <p>It's an great application!. </p>
                      </div>
                    </Col>
                    <Col sm>
                      <div className="HomeItemDivTesti">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImgTesti"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Bob Alice</b>
                        </h5>
                        <p>It's an great application!. </p>
                      </div>
                    </Col>
                    <Col sm>
                      <div className="HomeItemDivTesti">
                        <img
                          src={College}
                          className="img-fluid"
                          id="HomeItemImgTesti"
                        />
                        <h5 className="h5" style={{ marginTop: "10px" }}>
                          <b>Bob Alice</b>
                        </h5>
                        <p>It's an great application!. </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
