import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
import axios from "axios";
import Nav from "./components/Nav.js";
import ThingsToDo from "./components/ThingsToDo.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
// import Forum from "./components/Forum.js";


class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (

  <Router>
    <div className="container">
      <Nav/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Home" component={Home} />
      {/* <Route exact path="/Forum" component={Forum} /> */}
      <Route exact path="/Restaurant" component={Restaurant} />
      <Route exact path="/ThingsToDo" component={ThingsToDo} />
    </div>
  </Router>

);
 }}

export default App;
