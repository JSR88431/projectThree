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
    
    return (
        <div className="forum-element">
            <section>
                {/* <Button onClick={props.upOneLevel}>Back to Categories</Button> */}
            </section>
            <ul className="list-group">
                <section>
                <ModalCard
                        topicResults={props.topicResults}
                        handleLevelChange={props.handleLevelChange}
                        deleteATopic={props.deleteATopic}
                        upOneLevel={props.upOneLevel}
                        handleChange={props.handleChange}
                        forumInput={props.forumInput}
                        makeATopic={props.makeATopic}
                        onChange={props.handleChange}
                        onClick={props.makeATopic}
                        >
                </ModalCard>
                </section>
                {/* {section} */}
            </ul>
            <div>

            </div>
        </div>
    );
}

export default Topic;
