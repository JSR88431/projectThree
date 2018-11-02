import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import ForumCard from "../forumcomp/forumCard"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    fontSize: "125%",
    marginTop: "10%",
    lineHeight: "200%"
};

const Post = (props) => {

    let section = props.postResults.map(item => {
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
        <div className="forum-element">
            <Button onClick={props.upOneLevel}>Up One Level</Button>
            <ul className="list-group">{section}</ul>
            <ForumCard
                postId={props.postId}
                handleChange={props.handleChange}
                postInput={props.postInput}
                renderLevel={props.renderLevel}
                currentLevel={props.currentLevel}
                makeAPost={props.makeAPost}
            />
        </div>
    );
}

export default Post;
