import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import ForumStyle from "../ForumStyle.css";



const CategoryCard = (props) => {


    return (
        <ListGroup>
            <ListGroupItem>
                <ListGroupItemHeading 
                onClick={e => props.handleLevelChange(e, "Topic")}
                className="Forum gradient"
                id={props.id}> 
                    <h2><strong>{props.title}</strong></h2>
                </ListGroupItemHeading>
                <ListGroupItemText>
                    <h4>{props.description}</h4>
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    );
}

export default CategoryCard;




