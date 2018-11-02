
import Calendar from "./Calendar.js"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import Calendarcard from "./calendarcomp/calendarCard.js"

class Search extends React.Component {
    state = {
        results: [],
        clickedDay: ""
    }
    //load cards immediately
    componentDidMount() {
      // after component loads, get all products from db
      axios.get("/api/allMomsLaClasses").then(response => {
        this.setState({
          results: response.data
        });
      });
    }

    displayCalendarSearch = () =>{
      console.log((this.state.clickedDay))
      // console.log((this.state.results[0]))
    }
  render() {

    return (
      <Container>
        <Row>
          <Col>
            <Calendarcard 
                src = {this.state.results.image}
                title = {this.state.results.title}
                href = {this.state.results.link}
                src = {this.state.results.image}
               />
            </Col>
         </Row>
           <Row>
             <Col xs="6" sm="4"></Col>
              <Col xs="6" sm="4"></Col>
                <Col sm="4">
                   <Calendar 
                      onClickDay={(day) => 
                        this.setState({
                          clickedDay: day
                         })}
                         displayCalendarSearch={this.displayCalendarSearch()}
                      />
                </Col>
             </Row>       
       </Container>
    );
  }
}
export default Search;