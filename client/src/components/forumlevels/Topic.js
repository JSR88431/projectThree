import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import TopicCard from "../forumcomp/topicCard"
import { Button, Form, FormGroup, Label, Input, FormText,Row, Col } from 'reactstrap';
import ModalCard from '../forumcomp/modalCard.js'
const styles = {
    display: "inline-block",
    float: "right",
    margintop: "-60px"
};
const captionStyle ={
    display: "inline-block",
    marginTop: "-60px",
    float: 'right'
}

const Topic = (props) => {

    let section = props.topicResults.map(item => {
        // create a route-able link for each item
        return (
            <li className="list-group-item" key={item.id}>
            <Row>
                <Col>
                <a
                    href="#"
                    onClick={e => props.handleLevelChange(e, "Post")}
                    id={item.id}
                    txt={item.title}
                >
                    <h1>{item.title}</h1>
                </a>
                </Col>
            </Row>
                <p>Original Poster: {item.owner}</p>
                             <div style={{display: "inline-block",
                                        marginTop: "-60px",
                                        float: 'right'}}
                             >
                            <p>Number of Posts in Thread: {item.postCount}</p>
                            <p>Last Post At: {item.updatedAt}</p>
                        </div>
                <a href="#" id={item.id} onClick={props.deleteATopic} owner={item.owner}>Delete</a>
            </li>
        );
    });
    

    return (
        <div className="forum-element">
        <section>
            <Button onClick={props.upOneLevel}>Back to Categories</Button>
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
