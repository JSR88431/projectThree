import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ForumCard from "../forumcomp/forumCard.js";
class Post extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        console.log("Post did mount");
        let postId = this.props.postId;
        // after component loads, get all products from db
        axios.get(`/api/posts/${postId}`).then(response => {
            // update state object with newest data

            if (this.state.results !== response.data) {
                this.setState({
                    results: response.data
                });
            }
        });
    }

    componentDidUpdate() {
        let postId = this.props.postId;
        // after component loads, get all products from db
        axios.get(`/api/posts/${postId}`).then(response => {
            // update state object with newest data

            if (this.state.results.length !== response.data.length) {
                this.setState({
                    results: response.data
                });
            }
        });
    }

    render() {
        let section = this.state.results.map(item => {
            // create a route-able link for each item
            return (
                <li className="list-group-item" key={item.id}>
                    <p>
                        {item.author} ------- {item.createdAt}
                    </p>
                    <p>{item.body}</p>
                </li>
            );
        });

        return (
            <div>
                <button onClick={this.props.upOneLevel}>Up One Level</button>
                <ul className="list-group">{section}</ul>
                <ForumCard
                    postId={this.props.postId}
                    handleChange={this.props.handleChange}
                    forumInput={this.props.forumInput}
                    renderLevel={this.props.renderLevel}
                    currentLevel={this.props.currentLevel}
                    makeAPost={this.props.makeAPost}
                />
            </div>
        );
    }
}

export default Post;
