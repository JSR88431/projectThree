import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavTabs from "./NavTabs";
import Topic from "./forumlevels/Topic"
import Post from "./forumlevels/Post"
import "./Styles.css";

class Forum extends React.Component {
    state = {
        results: [],
        currentLevel: "Forum",
        topicId: "",
        postId: "",
        forumInput: ""
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

    
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }


    handleLevelChange = (e, level) => {
        console.log(e, "e")
        console.log(e.currentTarget.id, "e.currentTarget.id")

        if (this.state.currentLevel === "Forum") {
            this.setState({ currentLevel: level, topicId: e.currentTarget.id})
        }
        if (this.state.currentLevel === "Topic") {
            this.setState({ currentLevel: level, postId: e.currentTarget.id })
        }

        console.log(this.state.currentLevel)
    }

    upOneLevel = () => {
        if (this.state.currentLevel === "Topic") {
            this.setState({ currentLevel: "Forum"})
        }
        if (this.state.currentLevel === "Post") {
            this.setState({ currentLevel: "Topic"})
        }
    }
    
    // makeAPost = () => {
         
    //     axios.post("/posts/:topicId", {
    //         author: author,
    //         body:body
    //     })
    //     .then(function (response) {
    //         console.log(response.body, "axios response")
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })

    // }

    renderLevel = () => {
        console.log("Render Level is called.")

        if (this.state.currentLevel === "Topic") {
            return <Topic 
            currentLevel={this.state.currentLevel}
            handleLevelChange={this.handleLevelChange}
            topicId={this.state.topicId}
            upOneLevel={this.upOneLevel}
            />;
        }
        if (this.state.currentLevel === "Post") {

            return <Post 
            postId={this.state.postId}
            upOneLevel={this.upOneLevel}

            handleChange={this.handleChange}

            forumInput={this.state.forumInput}
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

