import React from "react";
import { Link } from "react-router-dom";
import AnimationComponent from "./animation_component";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.demo_user_handler = this.demo_user_handler.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }
  demo_user_handler(e) {
    e.preventDefault();
    const demoUser = {
      username: "demo_user",
      password: "123456"
    };
    this.props.processForm(demoUser);
  }
  errors() {
    return (
      <ul className="login-errors">
        {this.props.errors.length > 1 ? (
          this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        ) : (
          <div />
        )}
      </ul>
    );
  }
  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let path = "/login";
    let title = "signup";
    let altTitle = "Log in";
    let instruc = "Already have an account?";
    let headerGreet = "Sign up to see photos and videos from your friends.";

    let emailInput = (
      <input
        type="text"
        className="login-input"
        onChange={this.handleInput("email")}
        placeholder="Email"
        value={this.state.email}
      />
    );
    if (this.props.formType === "login") {
      title = "login";
      path = "/signup";
      altTitle = "Sign up";
      instruc = "Don't have an account?     ";
      headerGreet = "";
      emailInput = "";
    }

    return (
      <div className="page">
        <div className="login-page-container">
          <div className="login-page-left">
            <AnimationComponent />
          </div>
          <div className="login-page-right">
            <ul className="login-errors">{this.errors()}</ul>
            <div className="login-form-container">
                <h1 className="fotobox-logo">fotobox</h1>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <span className="greeting">{headerGreet}</span>
                  <label>{emailInput}</label>
                  <label>
                    <input
                      type="text"
                      className="login-input"
                      onChange={this.handleInput("username")}
                      placeholder="Username"
                      value={this.state.username}
                    />
                  </label>
                  <label>
                    <input
                      type="password"
                      className="login-input"
                      onChange={this.handleInput("password")}
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </label>
                  <input
                    className="session-submit login"
                    type="submit"
                    value={this.props.formType}
                  />
                  <p>or</p>
                  <button
                    className="session-submit demo"
                    onClick={this.demo_user_handler}
                  >
                    Demo Login
                  </button>
                </form>
            </div>
            <div className="login-signup-link">
                {instruc}
                <Link to={path}>{altTitle}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
