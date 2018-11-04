import React from "react";
import axios from "axios";
import Nav from "./Nav.js";
import GoogleMapsContainer from './GoogleMapsContainer.js'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import Geocode from "react-geocode";

class ThingsToDo extends React.Component {
    state = {
      results: [],
      title: "poop"
    };
    

    style = {
      width: '30%',
      height: '30%',
      
    }
    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/john/allLaCurbed").then((response) => {
          // console.log(response.data);
          this.setState({
            results: response.data
          });
        });
      }

      
     render() {
        return (
          <div>
          <Row>
            <Col>
            <div className="topMargin">
            {this.state.results.map(item => {
              Geocode.fromAddress(item.address).then(
                response => {
                  let geoResponse = response;

                  console.log(geoResponse);
                  
                     }             
                  )
                return (
                <div className="py-3">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={item.image} className="w-100"></img>
                      </div>
                      <div className="col-md-8 px-3">
                        <div className="card-block px-3 mt-3">
                          <h4 className="card-title">{item.title}</h4>
                          <p className="card-text">{item.description}.</p>
                          <p className="card-text">{item.address}.</p>
                          <a href={item.link} className="btn btn-primary" target="_blank">More Info</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
          </div>
          </Col>
          <Col >
          <GoogleMapsContainer
            
          
          />
          </Col>
          </Row>
       
         
         </div>
        );
      }
    }
export default ThingsToDo;

