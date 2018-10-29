import React from "react";
import axios from "axios";

class Restaurant extends React.Component {
    
    
    state = {
      results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/api/allRestaurant").then((response) => {
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
                    {item.name}
                    
                  </li>
                );
              })
            }
          </ul>
        );
      }

















}
export default Restaurant;
