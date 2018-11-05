import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import CategoryCard from "../forumcomp/categoryCard"

const styles = {
  fontSize: "125%",
  marginTop: "10px",
  lineHeight: "200%"
};

const Category = (props) => {

    let section = props.categoryResults.map(item => {
        // create a route-able link for each item
        return (
          <CategoryCard
              key={item.id}
              handleLevelChange={props.handleLevelChange}
              id={item.id}
              title={item.title}
              description={item.description}
          />
        );
      });

  return (
    <div style={styles}>
        {section}
      
    </div>
  );
};

export default Category;
