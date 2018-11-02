import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';

const TopicCard = (props) => {


    return (
        <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input 
            onChange={props.handleChange}
            type="textarea" name="text" id="topicTitle" />
        </FormGroup>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input 
            onChange={props.handleChange}
            value={props.forumInput}
          type="textarea" name="text" id="forumInput" />
        </FormGroup>
        <Button
        onClick={props.makeATopic}>
        Submit
        </Button>
      </Form>
    );
  
}

export default TopicCard;