import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import Banner from "../assets/banner.jpeg";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

import Logo from "../assets/logo.png";
import { Search } from "@material-ui/icons";
import { college_type, courses, fee, locations } from "../constants/options";
import { Autocomplete } from "@material-ui/lab";

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

      //Data
      locations: locations,
      courses: courses,
      college_type: college_type,
      fee: fee,

      searchLocation: "",
      searchStream: "",
      searchFee: "",
      searchCollegeType: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = () => {
    var location =
      this.state.searchLocation === null || this.state.searchLocation === ""
        ? ""
        : this.state.searchLocation;

    var courses =
      this.state.searchStream === null || this.state.searchStream === ""
        ? ""
        : this.state.searchStream;

    var fee =
      this.state.searchFee === null || this.state.searchFee === ""
        ? ""
        : this.state.searchFee.value;

    var college_type =
      this.state.searchCollegeType === null ||
      this.state.searchCollegeType === ""
        ? ""
        : this.state.searchCollegeType.value;

    window.location.href = `/listing?location=${location}&courses=${courses}&fee=${fee}&college_type=${college_type}`;
  };

  onLocationChange = (event, value) => {
    this.setState({
      searchLocation: value,
    });
    console.log(value);
  };

  onFeeChange = (event, value) => {
    this.setState({
      searchFee: value,
    });
    console.log(value);
  };

  onCollegTypeChange = (event, value) => {
    this.setState({
      searchCollegeType: value,
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
                  // onClick={() => this.handleSearchSelect("locationSelected")}
                >
                  <div>
                    <h6>
                      <b>Location</b>
                    </h6>
                    <div>
                      <Autocomplete
                        onChange={this.onLocationChange}
                        defaultChecked={this.state.searchLocation}
                        options={this.state.locations}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label={"Select College location"}
                          />
                        )}
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  sm
                  className="SearchItems SearchItemRightBorder"
                  id={this.state.streamSelected ? "Selected" : ""}
                  // onClick={() => this.handleSearchSelect("streamSelected")}
                >
                  <div>
                    <h6>
                      <b>Stream</b>
                    </h6>
                    <div>
                      <Autocomplete
                        onChange={this.onStreamChange}
                        defaultChecked={this.state.searchStream}
                        options={this.state.courses}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label={"Select a Stream"}
                          />
                        )}
                      />
                    </div>
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
                    <div>
                      <Autocomplete
                        onChange={this.onFeeChange}
                        defaultChecked={this.state.searchFee}
                        options={this.state.fee}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label={"Select Fee"}
                          />
                        )}
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  sm
                  className="SearchItems"
                  id={this.state.collegeTypeSelected ? "Selected" : ""}
                  // onClick={() => this.handleSearchSelect("collegeTypeSelected")}
                >
                  <div>
                    <h6>
                      <b>College Type</b>
                    </h6>
                    <div>
                      <Autocomplete
                        onChange={this.onCollegTypeChange}
                        defaultChecked={this.state.searchCollegeType}
                        options={this.state.college_type}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label={"Select College Type"}
                          />
                        )}
                      />
                    </div>
                  </div>
                </Col>
                <Col sm="1" className="SearchItems">
                  <div className="SearchIconDiv" id="SearchIDDiv" onClick={this.handleSubmit}>
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
