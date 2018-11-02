
import Calendar from "./Calendar.js"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Search extends React.Component {
    state = {
        results: [],
        clickedDay: ""
    }

    displayCalendarSearch = (e) =>{
      
            console.log(e, "hurray you made it this far");
       
    }

   


  render() {
    //   console.log((this.state.clickedDay))
    return (
      <Container>
        <Row>
          <Col>.col</Col>
                </Row>
                     <Row>
               <Col xs="6" sm="4"></Col>
                <Col xs="6" sm="4"></Col>
             <Col sm="4">
            <Calendar 
                 onClickDay={e =>this.displayCalendarSearch(e)}
            />
          
                
          </Col>
        </Row>       
      </Container>


    );
  }
}

export default Search;