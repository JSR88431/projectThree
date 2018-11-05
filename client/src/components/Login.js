import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import "./Styles.css";
// import "./Login.css";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      logInError: false
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      if (response.data === true) {
        this.setState({ logInError: false })
        this.props.history.push("/forum")
      } else if (response.data === false) {
        this.setState({ logInError: true })
      }
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  render() {

    let error;

    if (this.state.logInError === true) {
      error = <div>
        <p>Incorrect e-mail address or password.</p>
      </div>
    }

    return (
      <div class="Login LogInTemplate">
      <div className="Loginbox LogInTemplate">
       <div class="login-html">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <h2><strong>Member Login</strong></h2>
          <br />
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
            Login
          </Button>
        </form>
        {error}
      </div>
      </div>
      </div>

    );
  }
}