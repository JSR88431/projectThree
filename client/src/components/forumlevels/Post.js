import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import ForumCard from "../forumcomp/forumCard"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReplyModal from "../forumcomp/replyModal"
const styles = {
    fontSize: "125%",
    marginTop: "10%",
    lineHeight: "200%"
};

const Post = (props) => {

    // let section = props.postResults.map(item => {
    //     // create a route-able link for each item
    //     return (
    //         <li className="list-group-item" key={item.id}>
    //             <p>
    //                 {item.author} ------- {props.convertTime(item.createdAt)}
    //             </p>
    //             <p>{item.body}</p>
    //             <a href="#" id={item.id} onClick={props.deleteAPost} userid={item.UserId}>Delete</a>
    //         </li>
    //     );
    // });

    return (
        <div className="forum-element">
            <ReplyModal
                topicTitle={props.topicTitle}
                upOneLevel={props.upOneLevel}
                postId={props.postId}
                handleChange={props.handleChange}
                postInput={props.postInput}
                renderLevel={props.renderLevel}
                currentLevel={props.currentLevel}
                makeAPost={props.makeAPost}
                postResults={props.postResults}
                convertTime={props.convertTime}
                deleteAPost={props.deleteAPost}
            />
            {/* <ul className="list-group">{section}</ul> */}
           
        </div>
    );
}

export default Post;
