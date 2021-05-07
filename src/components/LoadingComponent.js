import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

class LoadingComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          <CircularProgress />
          <h1>Fetching Colleges.. Please wait..</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default LoadingComponent;
