
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

import TopicCard from './topicCard.js'

class ReplyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleAndMakeAPost = this.toggleAndMakeAPost.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleAndMakeAPost (){
    this.props.makeAPost();
      this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    let section = this.props.postResults.map(item => {
      // create a route-able link for each item
      return (
          <li className="list-group-item" key={item.id}>
              <p>
                  {item.author} ------- {this.props.convertTime(item.createdAt)}
              </p>
              <p>{item.body}</p>
              <a href="#" id={item.id} onClick={this.props.deleteAPost} userid={item.UserId}>Delete</a>
          </li>
      );
  });

    return (
      <div>
        <Button onClick={this.props.upOneLevel}>Back to Topics</Button>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Add Reply</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form>
        <FormGroup>
          <Label for="exampleText">Reply To Topic</Label>
          <Input 
          onChange={this.props.handleChange}
          value={this.props.postInput}
          type="textarea" name="text" id="postInput" />
        </FormGroup>
      </Form>
            <ModalFooter>
            <Button color="primary" onClick={this.toggleAndMakeAPost} >Reply To Topic</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <ul className="list-group">{section}</ul>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Add Reply</Button>
      </div>
    );
  }
}

export default ReplyModal;