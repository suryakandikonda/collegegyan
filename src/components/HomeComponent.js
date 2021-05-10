import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import Banner from "../assets/banner.jpeg";
import College from "../assets/college.jpg";
import { Col, Container, Row } from "reactstrap";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  Tab,
  Tabs,
} from "@material-ui/core";

import Logo from "../assets/logo.png";
import { LocalActivity, LocationOn, Search } from "@material-ui/icons";
import SearchOptionsComponent from "./SearchOptionsComponent";

import samp from "../assets/home.png";
import { APIURL } from "../constants/APIURL";
import LogoLoadingComponent from "./LogoLoadingComponent";
import LeftFilterComponent from "./LeftFilterComponent";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSelected: false,
      streamSelected: false,
      feesSelected: false,
      collegeTypeSelected: false,

      isLoading: true,

      //Dialogs
      streamDialogOpen: false,
      collegeTypeDialogOpen: false,

      selectedTab: 0,

      searchLocation: "",
      searchStream: "",
      searchFees: "",
      searchCollegeType: "",

      //
      featuredColleges: [],
      testimonials: [],
      banners: [],
      notifications: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getBanners = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(APIURL + "home_banner_slides", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          banners: result.data,
          isLoading: false,
        });
      })
      .catch((error) => console.log("error", error));
  };

  getNotifications = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(APIURL + "home_notifications", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          notifications: result.data,
        });
      })
      .catch((error) => console.log("error", error));
  };

  getFeaturedColleges = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(APIURL + "featured_colleges", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          featuredColleges: result.data,
        });
      })
      .catch((error) => console.log("error", error));
  };

  getTestimonials = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(APIURL + "testimonals", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          testimonials: result.data,
        });
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.getFeaturedColleges();
    this.getTestimonials();
    this.getNotifications();
    this.getBanners();
  }

  handleTabs = (event, newValue) => {
    this.setState({
      selectedTab: newValue,
    });
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

  tabsData = () => {
    return (
      <div>
        <Container>
          <Row>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
            <Col sm className="HomeTabItem">
              <div>
                <img src={samp} />
                <div>
                  <h6>MBA Exams</h6>
                  <p>50 + MBA exams. Do you know enough about them?</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <LogoLoadingComponent />
        </React.Fragment>
      );
    }
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
        <HeaderComponent />
        <div>
          {/* <div className="HomeBannerMainDiv">
            <img
              src={Banner}
              alt="Snow"
              style={{ width: "100%", height: "90vh" }}
            />
            <div className="centered">
              <Container>
                <SearchOptionsComponent />
              </Container>
            </div>
            <div class="top-left d-none d-sm-block">
              <img src={Logo} className="img-fluid" />
              
            </div>
          </div> */}

          <div style={{ marginTop: "0px" }}>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                {this.state.banners.length > 0 &&
                  this.state.banners.map((item, index) => (
                    <div
                      class={
                        index === 0 ? "carousel-item active" : "carousel-item"
                      }
                      style={{ maxHeight: "500px" }}
                    >
                      <img src={item.image} class="d-block w-100" alt="..." />
                      <div class="carousel-content">
                        <Container fluid>
                          <Row>
                            <Col sm></Col>
                            <Col sm="8">
                              <div className="d-none d-sm-block">
                                <SearchOptionsComponent isHomePage={true} />
                              </div>
                            </Col>
                            <Col sm></Col>
                          </Row>
                        </Container>
                        {index === 0 && (
                          <img
                            src={Logo}
                            className="img-fluid"
                            id="HomeBannerLogoImg"
                          />
                        )}
                        <br />
                        <h5>{item.title}</h5>
                        <p>{item.sub_text}</p>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          <a
                            id="NoHoverLink"
                            href={item.link_url}
                            style={{ color: "white" }}
                          >
                            {item.link_text}
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="NotificationsMainDiv">
            {this.state.notifications.length > 0 && (
              <Container fluid>
                <Row>
                  {this.state.notifications.map((item) => (
                    <Col sm xs="5">
                      <Row>
                        <Col sm>
                          <div>
                            <img
                              src={item.image}
                              style={{ width: "80px", maxHeight: "80px" }}
                            />
                          </div>
                        </Col>
                        <Col sm="8" className="nopadding">
                          <div>
                            <h6 className="h6">{item.title}</h6>
                            <p style={{ fontSize: "12px" }}>{item.sub_text}</p>
                            <p style={{ fontSize: "12px" }}>
                              <LocationOn fontSize="small" /> {item.location}
                            </p>
                            <a href={item.link_url}>{item.link_text}</a>
                          </div>
                        </Col>
                        <Col sm></Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </div>

          <Container>
            <div className="HomeContentMainDiv">
              <div className="HomeContentDiv">
                <div className="HomeContentTitle">
                  <h1 className="h1">
                    <b>Featured Colleges</b>
                  </h1>
                </div>
                <div className="HomeItemsMainDiv">
                  <Row>
                    {this.state.featuredColleges.length > 0 &&
                      this.state.featuredColleges.map((item) => (
                        <Col sm>
                          <div className="HomeItemDiv">
                            <img
                              src={item.image}
                              className="img-fluid"
                              id="HomeItemImg"
                            />
                            <h5 className="h5" style={{ marginTop: "10px" }}>
                              <b>{item.title}</b>
                            </h5>
                            <p>{item.location}</p>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>

              {/* <div style={{ marginTop: "60px" }} className="d-block d-sm-none">
                <h6 style={{ marginBottom: "40px" }} className="h6">
                  Search Colleges:
                </h6>
                <LeftFilterComponent />
              </div> */}

              <div>
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
                      centered
                      variant="scrollable"
                      scrollButtons="auto"
                      style={{ color: "#0D47A1" }}
                    >
                      <Tab label="MBA" />
                      <Tab label="BTECH" />
                      <Tab label="MEDICAL" />
                      <Tab label="DESIGN" />
                      <Tab label="MORE" />
                    </Tabs>
                  </Container>
                </div>

                <Container>
                  {this.state.selectedTab === 0 && (
                    <div style={{ marginTop: "20px" }}>
                      <this.tabsData />
                    </div>
                  )}

                  {this.state.selectedTab === 1 && (
                    <div style={{ marginTop: "20px" }}>
                      <this.tabsData />
                    </div>
                  )}

                  {this.state.selectedTab === 2 && (
                    <div style={{ marginTop: "20px" }}>
                      <this.tabsData />
                    </div>
                  )}

                  {this.state.selectedTab === 3 && (
                    <div style={{ marginTop: "20px" }}>
                      <this.tabsData />
                    </div>
                  )}
                  {this.state.selectedTab === 4 && (
                    <div style={{ marginTop: "20px" }}>
                      <this.tabsData />
                    </div>
                  )}
                </Container>
              </div>

              <div className="HomeContentDiv">
                <div className="HomeContentTitle">
                  <h1 className="h1">
                    <b>Testimonials</b>
                  </h1>
                </div>
                <div className="HomeItemsMainDiv">
                  <Row>
                    {this.state.testimonials.length > 0 &&
                      this.state.testimonials.map((item) => (
                        <Col sm>
                          <div className="HomeItemDivTesti">
                            <img
                              src={item.image}
                              className="img-fluid"
                              id="HomeItemImgTesti"
                            />
                            <h5 className="h5" style={{ marginTop: "10px" }}>
                              <b>{item.name}</b>
                            </h5>
                            <p>{item.message}</p>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
