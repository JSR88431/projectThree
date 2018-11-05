import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import "./Styles.css";
// import "./Login.css";
import "./Login.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      taken: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {

    event.preventDefault();

    axios
      .post(`/signup`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response.data === true) {
          this.setState({ taken: false })
          this.props.history.push("/forum")
        } else if (response.data === false) {
          this.setState({ taken: true })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {

    let error;

    if (this.state.taken === true) {
      error = <div>
        <br />
        <p style={{ color: "red", textAlign: "center" }}>That username or e-mail is already in use.</p>
      </div>
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2 style={{ textAlign: "center" }}><strong>Create Account</strong></h2>
          <br />
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username:</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Signup
          </Button>
          {error}
        </form>
      </div>
    );
  }
}