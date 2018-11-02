import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';

const ForumCard = (props) => {


    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
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