import React, { Component } from 'react'
import Logo from "./images/dadbase.png";
import "./Styles.css";
import axios from "axios";


class Nav extends React.Component {
    state = {}

    logout = () => {
        axios.get("/logout").then((res) => {

        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <a href="/"><img className="navbar-brand" src={Logo} width="200"></img></a>
                    <br/>
                    <br/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <a className="nav-link" href="/">home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ThingsToDo">things to do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Classes">classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Restaurant">family restaurants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Vacation">vacations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Dadhacks">dad hacks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Donate">donate</a>
                            </li>
{/*                         
                       ------------ MOVE TO RIGHT  -----------------------*/}

{/*                           
                            <li className="nav-item">
                                <a className="nav-link" href="/Forum">forum</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Login">login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Signup">signup</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/Search">Search</a>
                            </li> */}


 
                        </ul>
                    </div>
                    <span><a className="nav-link" href="/Forum">forum</a></span>
                    <span><a className="nav-link" href="/Login">login</a></span>
                    <span><a className="nav-link" href="/Signup">signup</a></span>
                    <span><a className="nav-link" href="/logout" onClick={this.logout} style={{ color:"red"}}>logout</a></span>
                    
                </nav>
            </div>
        );
    }
}

export default Nav;