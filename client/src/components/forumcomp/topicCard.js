import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';

class TopicCard extends React.Component {

  render() {
    return (
        <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input 
            onChange={this.props.handleChange}
            type="textarea" name="text" id="topicTitle" />
        </FormGroup>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input 
            onChange={this.props.handleChange}
            value={this.props.forumInput}
          type="textarea" name="text" id="forumInput" />
        </FormGroup>
        <Button
        onClick={this.props.makeATopic}>
        Submit
        </Button>
      </Form>
    );
  }
}

export default TopicCard;