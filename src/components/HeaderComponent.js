import { Dialog, DialogTitle } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { Component } from "react";
import { Bounce, Fade, Flip } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";

import Logo from "../assets/logo.png";
import SearchOptionsComponent from "./SearchOptionsComponent";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

      showOptions: false,

      //Options
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
        <div className="HeaderMainDivPC">
          <div className="HeaderNavDiv">
            <h6>Navbar</h6>
          </div>

          {this.state.show && (
            <Fade direction="down" className=" fixed-top">
              <div className="HeaderStickyDiv">
                <Container fluid>
                  <Row>
                    <Col sm>
                      <div>
                        <img
                          src={Logo}
                          className="img-fluid"
                          style={{ width: "150px" }}
                        />
                      </div>
                    </Col>
                    <Col sm>
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
