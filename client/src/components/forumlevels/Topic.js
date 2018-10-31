import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Topic extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get(`/api/topics/all`).then((response) => {
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
                    <a onClick={() => this.props.handleLevelChange("Post")}><h1>{item.title}</h1></a>
                    <p>Original Poster: {item.owner}</p>
                    <p>Number of Posts in Thread: {item.postNumber}</p>
                    <p>Last Post At: {item.updatedAt}</p>
                </li>
            );
        })

        return (
            <div>
                <ul className="list-group">
                    {section}
                </ul>
            </div>
        );
    }
}

export default Topic;

