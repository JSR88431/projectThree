import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
import Calendar from "./components/Calendar.js";
import axios from "axios";

class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (
  <div>
  <Calendar />
  <Router>
    <div className="container">
      <Route exact path="/home" component={Restaurant} />
    </div>
  </Router>
 </div>
);
 }}

export default App;
