import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant.js";


const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/home" component={Restaurant} />
    </div>
  </Router>
);

export default App;
