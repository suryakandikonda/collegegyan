import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import Banner from "../assets/banner.jpeg";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import { Avatar, Dialog, DialogTitle } from "@material-ui/core";

import Logo from "../assets/logo.png";
import { Search } from "@material-ui/icons";

class SearchOptionsComponent extends Component {
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
        <Row>
          <Col sm>
            <div></div>
          </Col>
          <Col sm="10" className="HomeSearchDiv">
            <div className="">
              <Row>
                <Col
                  sm
                  className="SearchItems SearchItemRightBorder"
                  id={this.state.locationSelected ? "Selected" : ""}
                  onClick={() => this.handleSearchSelect("locationSelected")}
                >
                  <div>
                    <h6>
                      <b>Location</b>
                    </h6>
                    {this.state.locationSelected ? (
                      <input
                        autoFocus
                        placeholder="Where was the college?"
                        id="SearchInputTag"
                        value={this.state.searchLocation}
                        name="searchLocation"
                        onChange={this.handleInputChange}
                      />
                    ) : this.state.searchLocation.trim().length > 0 ? (
                      <p>
                        <b>{this.state.searchLocation}</b>
                      </p>
                    ) : (
                      <p>Where was the College?</p>
                    )}
                  </div>
                </Col>
                <Col
                  sm
                  className="SearchItems SearchItemRightBorder"
                  id={this.state.streamSelected ? "Selected" : ""}
                  onClick={() => this.handleSearchSelect("streamSelected")}
                >
                  <div>
                    <h6>
                      <b>Stream</b>
                    </h6>
                    <p>Select a stream</p>
                  </div>
                </Col>
                <Col
                  sm
                  className="SearchItems SearchItemRightBorder"
                  id={this.state.feesSelected ? "Selected" : ""}
                  onClick={() => this.handleSearchSelect("feesSelected")}
                >
                  <div>
                    <h6>
                      <b>Fees</b>
                    </h6>
                    {this.state.feesSelected ? (
                      <input
                        autoFocus
                        placeholder="₹ Enter College fee"
                        id="SearchInputTag"
                        value={this.state.searchFees}
                        name="searchFees"
                        onChange={this.handleInputChange}
                      />
                    ) : this.state.searchFees.trim().length > 0 ? (
                      <p>
                        <b>{"₹ " + this.state.searchFees}</b>
                      </p>
                    ) : (
                      <p>₹ Enter College fee</p>
                    )}
                  </div>
                </Col>
                <Col
                  sm
                  className="SearchItems"
                  id={this.state.collegeTypeSelected ? "Selected" : ""}
                  onClick={() => this.handleSearchSelect("collegeTypeSelected")}
                >
                  <div>
                    <h6>
                      <b>College Type</b>
                    </h6>
                    <p>Select College type</p>
                  </div>
                </Col>
                <Col sm="1" className="SearchItems">
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
      </React.Fragment>
    );
  }
}

export default SearchOptionsComponent;
