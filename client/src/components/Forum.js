import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavTabs from "./NavTabs";
import Topic from "./forumlevels/Topic"
import Post from "./forumlevels/Post"

class Forum extends React.Component {
    state = {
        results: [],
        currentLevel: "Forum"
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

    handleLevelChange = level => {
        this.setState({ currentLevel: level })
        console.log(this.state.currentLevel)
    }

    renderLevel = () => {
        console.log("Render Level is called.")

        if (this.state.currentLevel === "Topic") {
            return <Topic 
            currentLevel={this.state.currentLevel}
            handleLevelChange={this.handleLevelChange}
            />;
        }
        if (this.state.currentLevel === "Post") {
            return <Post />;
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
                        <a onClick={() => this.handleLevelChange("Topic")}><h1>{item.title}</h1></a>
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

