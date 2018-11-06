import React, { Component } from 'react'
// import { Jumbotron, Button } from 'reactstrap';
// import axios from "axios";
import Background from "./images/niels.jpg";
import "./Styles.css";


var Bg = {
  width: "100%",
  height: "1000px",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
};

var textBlock = {
  position: "absolute",
    bottom: "20px",
    right: "20px",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px"
}


class Home extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {

    // // after component loads, get all products from db
    // axios.get("/joseph/scrapeAllRestaurants").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/joseph/scrapeVacations").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/carrie/scrapeRedTriHacks").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/carrie/scrapeMomsLaClasses").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/carrie/scrapeDonate").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/carrie/scrapeRedTriTtd").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/john/scrapeLaCurbed").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });


    // axios.get("/joseph/scrapeAllRestaurants").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });



    // axios.get("/carrie/scrapeRedTriTtd").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });

    // axios.get("/john/scrapeLaCurbed").then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     results: response.data
    //   });
    //   console.log(this.state.results);
    // });


  }

  render() {
    return (
      <div>
        <div style={Bg} className="container-fluid"></div>
        <div className="container">
          <div style={textBlock}>
            <h1 className="quicksand">created for dads.<br></br> by dads.</h1>
          </div>
        </div>


      </div>


    );
  }
}

export default Home;