import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import HeaderComponent from "./HeaderComponent";

import College from "../assets/college.jpg";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { ArrowDownward, ExpandMore } from "@material-ui/icons";
import LoadingComponent from "./LoadingComponent";
import { LinearProgress } from "@material-ui/core";
const queryString = require("query-string");

class ListingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      URLParamSearch: window.location.search,
      searchParam: {
        location: "",
        courses: "",
        college_type: "",
        fee: "",
        rating: "",
      },

      isLoading: true,
      fetching: true,

      data: [],
      currentPage: 0,
      lastPage: 1,
    };
  }

  getCollegeList = (query = this.state.query) => {
    this.setState({
      fetching: true,
    });
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log("Here");
    console.log(this.state.searchParam);

    fetch(
      "http://college-gyan.com/api/listing?courses=" +
        query.courses +
        "&rating=" +
        query.rating +
        "&fee=" +
        query.fee +
        "&location=" +
        query.location +
        "&college_type=" +
        query.college_type +
        "&page=" +
        (Number(this.state.currentPage) + 1),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          currentPage: result.colleges.current_page,
          data: [...this.state.data, ...result.colleges.data],
          lastPage: result.colleges.last_page,
          isLoading: false,
          fetching: false,
        });
      })
      .catch((error) => console.log("error", error));
  };
  componentDidMount() {
    var queryStr = {
      location: "",
      courses: "",
      college_type: "",
      fee: "",
      rating: "",
    };
    if (this.state.URLParamSearch.length === 0) {
      this.setState({
        searchParam: queryStr,
      });
    } else {
      queryStr = queryString.parse(window.location.search);
      var val = {
        location: queryStr.location === undefined ? "" : queryStr.location,
        courses: queryStr.courses === undefined ? "" : queryStr.courses,
        college_type:
          queryStr.college_type === undefined ? "" : queryStr.college_type,
        fee: queryStr.fee === undefined ? "" : queryStr.fee,
      };
      this.setState({
        searchParam: val,
      });
    }
    this.getCollegeList(val);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <LoadingComponent />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <HeaderComponent showDefaultHeader={true} />
        <div className="ListingMainDiv">
          <Container>
            <div className="ListingHeadingDiv">
              <h1 className="h1">
                {this.state.test}
                <b>Colleges</b>
              </h1>
              <p>You can filter using the Search bar above..</p>
            </div>
            <div className="ListingItemsMainDiv">
              {this.state.data.length === 0 ? (
                <h3>No Colleges to show</h3>
              ) : (
                this.state.data.map((item) => (
                  <Link to={`/college/${item.id}`} id="NoHoverLink">
                    <div className="ListingItemsDiv">
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
                            <h3>{item.name}</h3>
                            <p>Average fee: ₹ {item.average_fees}</p>
                            <h6>Rating:</h6>
                            <Rating
                              value={item.rating}
                              precision={0.1}
                              readOnly
                            />
                          </div>
                        </Col>
                        <Col sm className="nopadding"></Col>
                      </Row>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {this.state.fetching ? (
              <div className="EndOfPageDiv">
                <LinearProgress
                  style={{ backgroundColor: "#FFAB91", color: "#F4511E" }}
                />
                <br />
                <h5>Loading more colleges...</h5>
              </div>
            ) : this.state.currentPage !== this.state.lastPage ? (
              <div
                className="LoadMoreDiv"
                onClick={() => this.getCollegeList(this.state.searchParam)}
              >
                <h5>Click to load more data</h5>
                <ExpandMore />
              </div>
            ) : (
              <div className="EndOfPageDiv">
                <h5>You are reached to end of the page</h5>
              </div>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ListingComponent;
