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
                postId={props.props.postId}
                handleChange={props.props.handleChange}
                forumInput={props.props.forumInput}
                renderLevel={props.props.renderLevel}
                currentLevel={props.props.currentLevel}
                makeAPost={props.props.makeAPost}
            />
        </div>
    );
}

export default Post;
