import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';

export default class ForumCard extends React.Component {



    // makeAPost = () => {


    //     console.log("current level card: " + this.props.currentLevel)
    //     let postId = this.props.postId
    //     let userId = "2"

    //     console.log("card postid: " + postId)
         
    //     axios.post(`/api/posts/${postId}/${userId}`, {
    //         author: "Anthony",
    //         body: this.props.forumInput,
    //         TopicId: postId,
    //         UserId: userId
    //     })
    //     .then((response) => {

    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })



    // }

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
        onClick={this.props.makeAPost}
        >
        Submit
        </Button>
      </Form>
    );
  }
}