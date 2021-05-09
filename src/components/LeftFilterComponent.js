import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import Banner from "../assets/banner.jpeg";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

import Logo from "../assets/logo.png";
import { ExpandMore, Search } from "@material-ui/icons";
import { college_type, courses, fee, locations } from "../constants/options";
import { Autocomplete } from "@material-ui/lab";

class LeftFilterComponent extends Component {
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
        <Accordion className="sticky">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>Filters</h5>
          </AccordionSummary>
          <AccordionDetails style={{ width: "100%" }}>
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

            <div className="container-fluid">
              <div>
                <div
                  className="SearchItems "
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
                </div>
                <div
                  className="SearchItems "
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
                </div>
                <div
                  className="SearchItems "
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
                </div>
                <div
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
                </div>
                <div className="SearchItems" style={{ textAlign: "center" }}>
                  <div
                    className="SearchIconDiv"
                    id="SearchIDDiv"
                    onClick={this.handleSubmit}
                  >
                    <Search />
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </React.Fragment>
    );
  }
}

export default LeftFilterComponent;
