import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
import axios from "axios";
import Nav from "./components/Nav.js";
import ThingsToDo from "./components/ThingsToDo.js";

class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (

  <Router>
    <div className="container">
      <Nav/>
      <Route exact path="/Restaurant" component={Restaurant} />
      <Route exact path="/ThingsToDo" component={ThingsToDo} />
    </div>
  </Router>

);
 }}

export default App;
