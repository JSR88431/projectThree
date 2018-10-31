import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handleLevelChange("Forum")}
        className={
          props.currentPage === "Forum" ? "nav-link active" : "nav-link"
        }
      >
        Forum
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handleLevelChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handleLevelChange("Blog")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handleLevelChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
