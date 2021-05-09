import React, { Component } from "react";

import Logo from "../assets/logo.png";

class LogoLoadingComponent extends Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="stage">
            <img src={Logo} className="box bounce-1" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogoLoadingComponent;
