import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';
import ForumStyle from "../ForumStyle.css"; 


const ForumCard = (props) => {


    return (
      <Form>
        <FormGroup className="Forum gradient">
          <Label for="exampleText">Make a Post</Label>
          <Input 
          onChange={props.handleChange}
          value={props.postInput}
          type="textarea" name="text" id="postInput" />
        </FormGroup>
                
        <Button
        onClick={props.makeAPost}>
        Submit
        </Button>
      </Form>
    );

}

export default ForumCard;