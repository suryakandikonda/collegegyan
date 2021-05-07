import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import CollegeComponent from "./CollegeComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import ListingComponent from "./ListingComponent";

class MainComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/listing" component={ListingComponent} />

          <Route
            path="/college/:id"
            render={(routerProps) => (
              <CollegeComponent match={routerProps.match} />
            )}
          />

          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default MainComponent;
