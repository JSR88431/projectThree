import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';

class ForumCard extends React.Component {

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input 
          onChange={this.props.handleChange}
          value={this.props.forumInput}
          type="textarea" name="text" id="forumInput" />
        </FormGroup>
                
        <Button
        onClick={this.props.makeAPost}>
        Submit
        </Button>
      </Form>
    );
  }
}

export default ForumCard;