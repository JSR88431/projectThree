import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";

const styles = {
  fontSize: "125%",
  marginTop: "10%",
  lineHeight: "200%"
};

const Category = (props) => {

    let section = props.categoryResults.map(item => {
        // create a route-able link for each item
        return (
          <li className="list-group-item" key={item.id}>
            <a
              onClick={e => props.handleLevelChange(e, "Topic")}
              id={item.id}
            >
              <h1>{item.title}</h1>
            </a>
            <p>{item.description}</p>
          </li>
        );
      });

  return (
    <div className="col-lg-4 forum-element" style={styles}>
        <ul className="list-group">
        {section}
        </ul>
    </div>
  );
};

export default Category;
