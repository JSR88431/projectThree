import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button } from 'reactstrap';




const CategoryCard= (props) => {


    return (
        <ListGroup>
            <ListGroupItem>
                 <ListGroupItemHeading>
                     <h2>{props.title}</h2>
                     </ListGroupItemHeading>
                     <ListGroupItemText
                     id={props.id}
                     onClick={e => props.handleLevelChange(e, "Topic")}
                     >
                     {props.description}
                     </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
}

  export default CategoryCard;



    
