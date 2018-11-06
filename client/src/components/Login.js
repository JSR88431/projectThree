import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import Background from "./images/bg1.png";
import "./Styles.css";
// import "./Login.css";
import "./Login.css";

var Bg = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
};

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
      error = <div class>
          <br />
        <p style={{ color: "white", textAlign: "center", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>Incorrect e-mail address or password.</p>
      </div>
    }

    return (
      <div style={Bg}>
      <div class="Login LogInTemplate">
      <div className="Loginbox LogInTemplate">
       <div class="login-html">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <h2 style={{textAlign: "center"}}><strong>Member Login</strong></h2>
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
            className="logInButton"
          >
            Login
          </Button>
          {error}
          <a href="/auth/facebook"><button className="nav-link">Facebook</button></a>

        </form>

      </div>
      </div>
      </div>
    </div>
    );
  }
}