import React from "react";
import axios from "axios";

import MapContainer from "./MapContainer.js"
import { Container, Row, Col } from 'reactstrap';


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

      mapStyle = {
        display: "block",
        height: "50%",
        width: "50%"
      }

      render() {
        return (
          <div>
            <div style={this.mapStyle}>
               <MapContainer />
            </div>
            <div>
          {/* <ul style={this.ulStyle} className="list-group">

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
               </ul> */}
            </div>
          </div>
          
        );
        
      }
      
}
export default ThingsToDo;
