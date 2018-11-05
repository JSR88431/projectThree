import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button } from 'reactstrap';

const CategoryCard= (props) => {


    return (
        <ListGroup>
            <ListGroupItem>
                 <ListGroupItemHeading
                  onClick={e => props.handleLevelChange(e, "Topic")}
                  id={props.id}
                 >
                        {props.title}
                </ListGroupItemHeading>
                     <ListGroupItemText 
                     >
                       {props.description}
                  </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
}

  export default CategoryCard;



    
