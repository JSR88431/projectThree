import React from "react";
import axios from "axios";


class Restaurant extends React.Component {
    state = {
      results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
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