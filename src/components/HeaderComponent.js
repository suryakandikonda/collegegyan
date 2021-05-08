import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Close, Menu, Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { Component } from "react";
import { Bounce, Fade, Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Logo from "../assets/logo.png";
import { courses, locations } from "../constants/options";
import SearchOptionsComponent from "./SearchOptionsComponent";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

      showDefaultHeader: this.props.showDefaultHeader,

      showOptions: false,

      //Options
      locationSelected: false,
      streamSelected: false,
      feesSelected: false,
      collegeTypeSelected: false,

      //Dialogs
      streamDialogOpen: false,
      collegeTypeDialogOpen: false,
      //
      mobileDialogOpen: false,

      //Data
      locations: locations,
      courses: courses,

      searchLocation: "",
      searchStream: "",
      searchFees: "",
      searchCollegeType: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleMobileDialogOpen = () => {
    this.setState({
      mobileDialogOpen: true,
    });
  };

  handleMobileDialogClose = () => {
    this.setState({
      mobileDialogOpen: false,
    });
  };

  onLocationChange = (event, value) => {
    this.setState({
      searchLocation: value,
    });
    console.log(value);
  };
  onStreamChange = (event, value) => {
    this.setState({
      searchStream: value,
    });
    console.log(value);
  };

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

  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.addEventListener("scroll", () => {
      var y = window.scrollY;
      if (y >= 200) {
        this.setState({
          show: true,
        });
      } else {
        this.setState({
          show: false,
          showOptions: false,
        });
      }
    });
  }

  TopDarkNav = () => {
    return (
      <div className="HeaderNavDiv">
        <div class="Navcontainer teal borderYtoX">
          <a>MBA</a>
          <a>ENGINEERING</a>
          <a>MEDICAL</a>
          <a>DESIGN</a>
          <a>MORE</a>
          <a>STUDY ABROAD</a>
          <a>COUNSELLING</a>
          <a>CAREER TESTS</a>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Dialog open={this.state.mobileDialogOpen} fullScreen>
          <DialogContent>
            <div className="MobileDialogMainDiv">
              <div
                style={{ textAlign: "right", margin: "0px", padding: "10px" }}
              >
                <Close
                  onClick={this.handleMobileDialogClose}
                  style={{ color: "white" }}
                  fontSize="large"
                />
              </div>
              <div>
                <this.TopDarkNav />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={this.state.streamDialogOpen}
          onClose={() => this.handleDialogClose("streamDialogOpen")}
        >
          <DialogTitle>Select a Stream</DialogTitle>
          <DialogContent>
            <div>
              <Autocomplete
                onChange={this.onStreamChange}
                defaultChecked={this.state.searchStream}
                options={this.state.courses}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={"Select a Stream"}
                  />
                )}
              />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={this.state.collegeTypeDialogOpen}
          onClose={() => this.handleDialogClose("collegeTypeDialogOpen")}
        >
          <DialogTitle>Select College Type</DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>
        <div className="HeaderMainDivPC">
          <div className="d-none d-sm-block">
            <this.TopDarkNav />
          </div>
          <div className="d-block d-sm-none" style={{ margin: "10px" }}>
            <Container fluid>
              <Row>
                <Col sm xs>
                  <div>
                    <Link to="/home">
                      <img
                        src={Logo}
                        className="img-fluid"
                        style={{ width: "100px" }}
                      />
                    </Link>
                  </div>
                </Col>
                <Col sm xs>
                  <div></div>
                </Col>
                <Col sm xs>
                  <div style={{ marginTop: "10px", textAlign: "right" }}>
                    <Menu
                      fontSize="large"
                      onClick={this.handleMobileDialogOpen}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {(this.state.show || this.state.showDefaultHeader === true) && (
            <div className="animated fadeInDown fixed-top">
              <div className="HeaderStickyDiv">
                <Container fluid>
                  <Row>
                    <Col sm xs>
                      <Link to="/home">
                        <div>
                          <img
                            src={Logo}
                            className="img-fluid"
                            style={{ width: "150px" }}
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col sm xs>
                      {this.state.showOptions ? (
                        <div
                          style={{ textAlign: "center" }}
                          onClick={() =>
                            this.setState({
                              showOptions: false,
                            })
                          }
                        >
                          <Close />
                        </div>
                      ) : (
                        <div className="animated fadeIn">
                          <div
                            className="HeaderSearchDiv"
                            onClick={() =>
                              this.setState({
                                showOptions: !this.state.showOptions,
                              })
                            }
                          >
                            <Row>
                              <Col sm xs="7">
                                <div style={{ marginTop: "10px" }}>
                                  <h5>Search</h5>
                                </div>
                              </Col>
                              <Col sm="2" xs="2">
                                <div className="SearchIconDiv">
                                  <Search />
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      )}
                    </Col>
                    <Col sm>
                      <div></div>
                    </Col>
                  </Row>
                  {this.state.showOptions && (
                    <Flip direction="horizontal">
                      <Container>
                        <SearchOptionsComponent />
                      </Container>
                    </Flip>
                  )}
                </Container>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
