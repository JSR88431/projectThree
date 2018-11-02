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

      render() { 
        return (
         <div class="container">
          <div class="row">
          <div class="col-6">
          <MapContainer />

            </div>
        </div>
        </div>
        );
      }
    }
     
 

export default ThingsToDo;
