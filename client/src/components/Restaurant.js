import React from "react";
import axios from "axios";
import Nav from "./Nav.js";

class Restaurant extends React.Component {
    state = {
      results: []
    };
    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/john/allLaCurbed").then((response) => {

        axios.get("/joseph/AllRestaurant").then((response) => {
          console.log(response.data);
          this.setState({
            results: response.data
          });
        });
      }
      render() {
        return (
          <ul className="list-group">
            {
              this.state.results.map((item) => {
                // create a route-able link for each product
                return (
                  
                  <li className="list-group-item">
                    {item.title}
                    <br />

                    {item.phone}
                    <br />
                    {item.description}
                    <br />
                    {item.descriptionTwo}
                    <br />
                    {item.address}
                    <br />
                    {item.link}
                    {item.id}

                    
                    {item.link}
                  

                  </li>
                );
              })
            }
          </ul>
        );
      }
}
export default Restaurant;
