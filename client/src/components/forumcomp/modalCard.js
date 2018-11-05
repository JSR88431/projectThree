
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

import TopicCard from './topicCard.js'

class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Create Topic</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
             
          <Form>
          <h1>Create Topic</h1>
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
        
      </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.props.makeATopic}>Create Topic</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCard;