import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TopicCard from "../forumcomp/topicCard.js";

class Topic extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    let topicId = this.props.topicId;

    // after component loads, get all products from db
    axios.get(`/api/topics/${topicId}`).then(response => {
      // update state object with newest data
      this.setState({
        results: response.data
      });
    });
  }

  

  render() {
    let section = this.state.results.map(item => {
      // create a route-able link for each item
      return (
        <li className="list-group-item" key={item.id}>
          <a
            onClick={e => this.props.handleLevelChange(e, "Post")}
            id={item.id}
          >
            <h1>{item.title}</h1>
          </a>
          <p>Original Poster: {item.owner}</p>
          <p>Number of Posts in Thread: {item.postNumber}</p>
          <p>Last Post At: {item.updatedAt}</p>
        </li>
      );
    });

    return (
      <div>
        <button onClick={this.props.upOneLevel}>Up One Level</button>
        <ul className="list-group">{section}</ul>
        <h1>Create a Topic</h1>
        <TopicCard
            postId={this.props.postId}
            handleChange={this.props.handleChange}
            forumInput={this.props.forumInput}
            topicTitle={this.props.topicTitle}
            renderLevel={this.props.renderLevel}
            currentLevel={this.props.currentLevel}
            makeATopic={this.props.makeATopic}
        />
      </div>
    );
  }
}

export default Topic;
