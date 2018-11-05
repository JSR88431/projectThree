    import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button } from 'reactstrap';
import ForumStyle from "../ForumStyle.css"; 



const CategoryCard= (props) => {   


    return (
        <ListGroup>
            <ListGroupItem>
                 <ListGroupItemHeading  className="Forum gradient"> <h2><strong>{props.title}</strong></h2> </ListGroupItemHeading>
                     <ListGroupItemText
                     id={props.id}
                     onClick={e => props.handleLevelChange(e, "Topic")}
                    >
                     <h4>{props.description}</h4>
                     </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
}

  export default CategoryCard;



    
