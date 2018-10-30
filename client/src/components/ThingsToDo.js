import React from "react";
import axios from "axios";
import Nav from "./Nav.js";

class ThingsToDo extends React.Component {
    state = {
      results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/john/allLaCurbed").then((response) => {
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
                  </li>
                );
              })
            }
          </ul>
        );
      }
}
export default ThingsToDo;
