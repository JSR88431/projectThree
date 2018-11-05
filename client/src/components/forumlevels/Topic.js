import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import TopicCard from "../forumcomp/topicCard"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ModalCard from '../forumcomp/modalCard.js'
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
                    href="#"
                    onClick={e => props.handleLevelChange(e, "Post")}
                    id={item.id}
                    txt={item.title}
                >
                    <h1>{item.title}</h1>
                </a>
                <p>Original Poster: {item.owner}</p>
                <p>Number of Posts in Thread: {item.postNumber}</p>
                <p>Last Post At: {item.updatedAt}</p>
                <a href="#" id={item.id} onClick={props.deleteATopic} owner={item.owner}>Delete</a>
            </li>
        );
    });

    return (
        <div className="forum-element">
        <section>
            <Button onClick={props.upOneLevel}>Up One Level</Button>
        </section>    
            <ul className="list-group">
            <section>
                <ModalCard
                        handleChange={props.handleChange}
                        forumInput={props.forumInput}
                         makeATopic={props.makeATopic}
                         onChange={props.handleChange}
                         onClick={props.makeATopic}>

                    >
                </ModalCard>
            </section>
            {section}
            </ul>
        
            <div>
             
            </div>
        </div>
    );
}

export default Topic;
