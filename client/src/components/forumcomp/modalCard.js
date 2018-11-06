
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Row, Col } from 'reactstrap';
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

    let section;

    if (this.props.topicResults.length > 0) {

      section = this.props.topicResults.map(item => {
        // create a route-able link for each item
        return (
            <li className="list-group-item" key={item.id}>
            <Row>
                <Col>
                <a
                    href="#"
                    onClick={e => this.props.handleLevelChange(e, "Post")}
                    id={item.id}
                    txt={item.title}
                >
                    <h1>{item.title}</h1>
                </a>
                </Col>
            </Row>
                <p>Original Poster: {item.owner}</p>
                             <div style={{display: "inline-block",
                                        marginTop: "-60px",
                                        float: 'right'}}
                             >
                            <p>Number of Posts in Thread: {item.postCount}</p>
                            <p>Thread Created At: {this.props.convertTime(item.createdAt)}</p>
                        </div>
                <a href="#" id={item.id} onClick={this.props.deleteATopic} owner={item.owner}>Delete</a>
            </li>
        );
    });
    

    }





    return (
      <div>
        <Button onClick={this.props.upOneLevel}>Back to Categories</Button>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} New Topic</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>

            <Form>
              <h1>Create Topic</h1>
              <FormGroup>
                <Label for="title" style={{color:"black"}}>Title</Label>
                <Input
                  onChange={this.props.handleChange}
                  type="textarea" name="text" id="topicTitle" />
              </FormGroup>
              <FormGroup>
                <Label for="body" style={{color:"black"}}>Body</Label>
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
        {section}
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} New Topic</Button>
      </div>
    );
  }
}

export default ModalCard;