import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import { Rating } from "@material-ui/lab";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs } from "@material-ui/core";
import LoadingComponent from "./LoadingComponent";
import { APIURL } from "../constants/APIURL";

class CollegeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      selectedTab: 0,

      isLoading: true,

      data: undefined,
    };
  }
  handleTabs = (event, newValue) => {
    this.setState({
      selectedTab: newValue,
    });
  };

  getDetails = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      APIURL + "college_info?id=" + this.state.id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          data: result.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          isLoading: false,
        });
      });
  };
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getDetails();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <LoadingComponent page="college" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <HeaderComponent showDefaultHeader={true} />
        <div className="CollegeMainDiv">
          {this.state.data === null || this.state.data === undefined ? (
            <h3>College Not Found</h3>
          ) : (
            <div className="CollegeContentDiv">
              <Container>
                <Row>
                  <Col sm className="">
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={College}
                        className="img-fluid"
                        id="ListItemImg"
                      />
                    </div>
                  </Col>
                  <Col sm="8" className="nopadding">
                    <div className="ListItemRightDiv">
                      <h3 className="h3">
                        <b>{this.state.data.name}</b>
                      </h3>
                      <p>
                        {this.state.data.city} {this.state.data.state}{" "}
                        {this.state.data.country}
                      </p>
                      <p>
                        <b>Established Year: </b>
                        {this.state.data.established_year};{" "}
                        <b>Total Faculty: </b>
                        {this.state.data.total_faculty}
                      </p>
                    </div>
                  </Col>
                  <Col sm className="nopadding"></Col>
                </Row>
              </Container>

              <Fade direction="up">
                <Container>
                  <div className="CollegeFirstItemsMainDiv">
                    <Row>
                      <Col sm>
                        <div className="CollegeFirstItem">
                          <h5 className="h5">College Type</h5>
                          <p>{this.state.data.college_type}</p>
                        </div>
                      </Col>
                      <Col sm>
                        <div className="CollegeFirstItem">
                          <h5 className="h5">Genders Accepted</h5>
                          <p>{this.state.data.genders_accepted}</p>
                        </div>
                      </Col>
                      <Col sm>
                        <div className="CollegeFirstItem">
                          <h5 className="h5">Campus Size</h5>
                          <p>{this.state.data.campus_size}</p>
                        </div>
                      </Col>
                      <Col sm>
                        <div className="CollegeFirstItem">
                          <h5 className="h5">Rating</h5>
                          <Rating
                            value={this.state.data.rating}
                            precision={0.1}
                            readOnly
                          />
                          <p>{this.state.data.rating}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Fade>

              <div style={{ marginTop: "80px" }}>
                <Container>
                  <Tabs
                    value={this.state.selectedTab}
                    onChange={this.handleTabs}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#3F51B5",
                      },
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                    style={{ color: "#0D47A1" }}
                    centered
                  >
                    <Tab label="Courses" />
                    <Tab label="Facilities" />
                  </Tabs>
                </Container>
              </div>

              <Container>
                {this.state.selectedTab === 0 && (
                  <div style={{ marginTop: "20px" }}>
                    {this.state.data.courses.split(",").map((course) => (
                      <div className="CollegeCourseItem">
                        <p>{course}</p>
                      </div>
                    ))}
                  </div>
                )}

                {this.state.selectedTab === 1 && (
                  <div style={{ marginTop: "20px" }}>
                    {this.state.data.facilities.split(",").map((course) => (
                      <div className="CollegeCourseItem">
                        <p>{course}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Container>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CollegeComponent;
