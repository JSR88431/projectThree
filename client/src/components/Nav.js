import React, { Component } from 'react'

class Nav extends React.Component {
    state = {  }
    render() { 
        return (
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ThingsToDo">Things To Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Camp/Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Restaurant">Family Restaurant</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Parenting Advice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Forum">Forum</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Signup">Signup</a>
                            </li>
                            
                            </ul>
                        </div>
                        </nav>
                        </div>
          );
    }
}
 
export default Nav;