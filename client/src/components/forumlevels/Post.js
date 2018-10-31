import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Post extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get(`/api/posts/all`).then((response) => {
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
                <ul className="list-group">
                    {section}
                </ul>
            </div>
        );
    }
}

export default Post;

