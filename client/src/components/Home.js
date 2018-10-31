import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import "./Styles.css";

class Home extends React.Component {
  state = {}
  render() {
    return (
      <div>

         <div className="container py-3 topMargin">
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100"></img>
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3 mt-3">
                  <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
                  <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a href="#" className="btn btn-primary">More Info</a>
                </div>
              </div>

            </div>
          </div>
        </div>
       

        <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100"></img>
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3 mt-3">
                  <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
                  <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a href="#" className="btn btn-primary">More Info</a>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
      

    );
  }
}

export default Home;