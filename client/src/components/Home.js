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
      
       <section style={Bg}></section>
 
     
    );
  }
}

export default Home;