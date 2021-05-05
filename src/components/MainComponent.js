import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import HomeComponent from "./HomeComponent";

class MainComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={HomeComponent} />

          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MainComponent;
