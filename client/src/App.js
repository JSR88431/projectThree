import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
import Forum from "./components/Forum.js";
import axios from "axios";

class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (

  <Router>
    <div className="container">
      <Route exact path="/home" component={Restaurant} />
      <Route exact path="/forum" component={Forum} />
      <Route exact path="/categories/:catname" component={Forum} />
      {/* <Route exact path="/product/:id" component={Product} /> */}
    </div>
  </Router>

);
 }}

export default App;
