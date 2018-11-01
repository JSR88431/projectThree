import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavTabs from "./NavTabs";
import Topic from "./forumlevels/Topic"
import Post from "./forumlevels/Post"
import "./Styles.css";

class Forum extends React.Component {

    constructor(props) {
        super(props)

        this.renderLevel = this.renderLevel.bind(this)
      }

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


        if (this.state.currentLevel === "Forum") {
            this.setState({ currentLevel: level, topicId: e.currentTarget.id})
        }
        if (this.state.currentLevel === "Topic") {
            this.setState({ currentLevel: level, postId: e.currentTarget.id })
        }


    }

    upOneLevel = () => {
        if (this.state.currentLevel === "Topic") {
            this.setState({ currentLevel: "Forum"})
        }
        if (this.state.currentLevel === "Post") {
            this.setState({ currentLevel: "Topic"})
        }
    }
    
    makeAPost = () => {

        console.log("current level card: " + this.currentLevel)
        let postId = this.state.postId
        let userId = "2"

         
        axios.post(`/api/posts/${postId}/${userId}`, {
            author: "Anthony",
            body: this.state.forumInput,
            TopicId: postId,
            UserId: userId
        })
        .then((response) => {
            this.renderLevel();
        })
        .catch(function (error) {
            console.log(error)
        })



    }

    renderLevel = () => {


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
            renderLevel={this.renderLevel}
            currentLevel={this.state.currentLevel}
            makeAPost={this.makeAPost}
        
            />;
        }


    }


    render() {


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

