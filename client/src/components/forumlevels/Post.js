import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ForumCard from "../forumcomp/forumCard.js"
class Post extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        let postId = this.props.postId
        // after component loads, get all products from db
        axios.get(`/api/posts/${postId}`).then((response) => {
            // update state object with newest data
            this.setState({
                results: response.data
            });
        });
    }

    render() {
        console.log(this.state.results)

        let section = this.state.results.map((item) => {
            // create a route-able link for each item
            return (
                <li className="list-group-item" key={item.id}>
                    <p>{item.author} -------                    {item.createdAt}</p>
                    <p>{item.body}</p>

                </li>
            );
        })

        return (
            <div>
                <button onClick={this.props.upOneLevel}>Up One Level</button>
                <ul className="list-group">
                    {section}
                </ul>
                <ForumCard
                postId={this.props.postId}
                handleChange={this.props.handleChange}
                forumInput={this.props.forumInput}
                />
            </div>
        );
    }
}

export default Post;

