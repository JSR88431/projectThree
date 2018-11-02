import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";
import Forum from "./components/Forum.js";
import axios from "axios";
import Calendar from "./components/Calendar.js";
import Nav from "./components/Nav.js";
import ThingsToDo from "./components/ThingsToDo.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import Vacation from "./components/Vacation.js";
import Donate from "./components/Donate.js";
import Classes from "./components/Classes.js";
import Dadhacks from "./components/Dadhacks.js";
// import Forum from "./components/Forum.js";


class App extends React.Component {

  // getScrape() {
  //   axios.get("/john/scrape")
  // }
 render() {


 return (
  <div>
  <Router>
    <div className="container">

      <Route exact path="/forum" component={Forum} />
      <Route exact path="/categories/:catname" component={Forum} />
      {/* <Route exact path="/product/:id" component={Product} /> */}
      <Nav/>
      
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Restaurant" component={Restaurant} />
      <Route exact path="/ThingsToDo" component={ThingsToDo} />
      <Route exact path="/Vacation" component={Vacation} />
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/Classes" component={Classes} />
      <Route exact path="/Dadhacks" component={Dadhacks} />
    </div>
  </Router>
 </div>
);
 }}

export default App;
