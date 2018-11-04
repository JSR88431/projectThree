import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button } from 'reactstrap';

const CategoryCard= (props) => {


    return (
        <ListGroup>
            <ListGroupItem>
                 <ListGroupItemHeading>
                        {props.title}
                </ListGroupItemHeading>
                     <ListGroupItemText>
                       {props.description}
                  </ListGroupItemText>
                    <Button
                    id={props.id}
                    onClick={e => props.handleLevelChange(e, "Topic")}
                    >
                    Click Here
                    </Button> 
        </ListGroupItem>
      </ListGroup>
    );
}

  export default CategoryCard;



    
