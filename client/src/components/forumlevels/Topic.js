import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import TopicCard from "../forumcomp/topicCard"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    fontSize: "125%",
    marginTop: "10%",
    lineHeight: "200%"
};

const Topic = (props) => {

    let section = props.topicResults.map(item => {
        // create a route-able link for each item
        return (
            <li className="list-group-item" key={item.id}>
                <a
                    onClick={e => props.handleLevelChange(e, "Post")}
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
        <div className="forum-element">
            <Button onClick={props.upOneLevel}>Up One Level</Button>
            <ul class="list-group">
            {section}
            </ul>
            <TopicCard
                postId={props.postId}
                handleChange={props.handleChange}
                forumInput={props.forumInput}
                topicTitle={props.topicTitle}
                renderLevel={props.renderLevel}
                currentLevel={props.currentLevel}
                makeATopic={props.makeATopic}
            />
        </div>
    );
}

export default Topic;
