import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
// import axios from "axios";

class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (

  <Router>
    <div className="container">
      <Route exact path="/home" component={Restaurant} />
    </div>
  </Router>

);
 }}

export default App;
