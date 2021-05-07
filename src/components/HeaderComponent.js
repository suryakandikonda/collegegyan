import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
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
    window.addEventListener("scroll", () => {
      var y = window.scrollY;
      if (y >= 200) {
        console.log("Scrolled");
        this.setState({
          show: true,
        });
      } else {
        console.log("Back to normal");
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
          <this.TopDarkNav />
          {(this.state.show || this.state.showDefaultHeader === true) && (
            <Fade direction="down" className=" fixed-top">
              <div className="HeaderStickyDiv">
                <Container fluid>
                  <Row>
                    <Col sm>
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
                    <Col sm>
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
                        <Fade>
                          <div
                            className="HeaderSearchDiv"
                            onClick={() =>
                              this.setState({
                                showOptions: !this.state.showOptions,
                              })
                            }
                          >
                            <Row>
                              <Col sm>
                                <div style={{ marginTop: "10px" }}>
                                  <h5>Search</h5>
                                </div>
                              </Col>
                              <Col sm="2">
                                <div className="SearchIconDiv">
                                  <Search />
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Fade>
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
            </Fade>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
