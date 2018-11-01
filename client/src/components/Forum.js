import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavTabs from "./NavTabs";
import Topic from "./forumlevels/Topic"
import Post from "./forumlevels/Post"

class Forum extends React.Component {
    state = {
        results: [],
        currentLevel: "Forum",
        topicId: "",
        postId: ""
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/api/categories/all").then((response) => {
            console.log(response)
            this.setState({
                results: response.data
            });
        });

    }

    onClick = (event, level) => {
        this.handleLevelChange(level);
        this.handleClickId(event);

    }

    handleClickId = (e) => {
        console.log(e, "e")
        console.log(e.target.id, "e.target.id")
    }

    handleLevelChange = (e, level) => {
        console.log(e, "e")
        console.log(e.currentTarget.id, "e.currentTarget.id")
        this.setState({ currentLevel: level, topicId: e.currentTarget.id, postId: e.currentTarget.id })
        console.log(this.state.currentLevel)
    }

    renderLevel = () => {
        console.log("Render Level is called.")

        if (this.state.currentLevel === "Topic") {
            return <Topic 
            currentLevel={this.state.currentLevel}
            handleLevelChange={this.handleLevelChange}
            topicId={this.state.topicId}
            />;
        }
        if (this.state.currentLevel === "Post") {
            return <Post 
            postId={this.state.postId}
            />;
        }


    }


    render() {
        console.log(this.state.results)
        console.log(this.state.currentLevel)

        let section;

        if (this.state.currentLevel === "Forum") {
            section = this.state.results.map((item) => {
                // create a route-able link for each item
                return (
                    <li className="list-group-item" key={item.id}>
                        <a onClick={(e) => this.handleLevelChange(e, "Topic")} id={item.id}><h1>{item.title}</h1></a>
                        <p>{item.description}</p>
                    </li>
                );
            })
        }


        return (
            <div>
                <ul className="list-group">
                    {section}
                    {this.renderLevel()}
                </ul>

            </div>
        );
    }
}

export default Forum;

