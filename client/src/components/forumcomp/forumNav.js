import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";
import Forum from '../Forum';
import ForumStyle from "../ForumStyle.css";
import "../Styles.css";


const ForumNav = (props) => {


    return (
        <div className="row forum-nav">
            <div className="col-3 d-flex justify-content-between ">
                <a className="forum-nav-link" href="forum">Home</a> •
                <a className="forum-nav-link" href="http://lmgtfy.com/?iie=1&q=google.com">FAQ</a> •
                <a className="forum-nav-link" href="#com">Community</a> •
                <a className="forum-nav-link" href="#chat">Chat Room</a>
            </div>
        </div>
    );

}

export default ForumNav;