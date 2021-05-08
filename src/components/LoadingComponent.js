import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
    };
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          <CircularProgress />
          <h1>
            {this.state.page === "college"
              ? "Loading College details.. Please wait.. "
              : "Fetching Colleges.. Please wait.."}
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default LoadingComponent;
