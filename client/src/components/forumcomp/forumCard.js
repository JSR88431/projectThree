import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

export default class ForumCard extends React.Component {
    

    makeAPost = () => {

        let postId = this.props.postId
        let userId = "2"

        console.log("card postid: " + postId)
         
        axios.post(`/api/posts/${postId}/${userId}`, {
            author: "Anthony",
            body: this.props.forumInput,
            TopicId: postId,
            UserId: userId
        })
        .then(function (response) {
            console.log(response, "axios response")
        })
        .catch(function (error) {
            console.log(error)
        })

    }

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
        onClick={this.makeAPost}
        >
        Submit
        </Button>
      </Form>
    );
  }
}