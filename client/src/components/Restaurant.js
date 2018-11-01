import React from "react";
import axios from "axios";
import {Container, Row, Col} from 'reactstrap';
import PeopleCard from "./restaurantfolder/RestaurantCard.js";

class Restaurant extends React.Component {
  constructor (){
    super();
  }
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get("/api/AllRestaurant").then((response) => {
      console.log(response.data);
      this.setState({
        results: response.data
      });
    });
  }
  
  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default Restaurant;



