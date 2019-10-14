import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section>
          <h2>Hello, {this.props.currentUser.username}!</h2>
          <button onClick={this.handleClick}>Log Out</button>
        </section>
      );
    } else {
      return (
        <div>
          {/* <Link to="/signup">Sign Up</Link> */}
          <br />
          {/* <Link to="/login">Log In</Link> */}
        </div>
      );
    }
  }
}

export default Splash;
