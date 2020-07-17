import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SearchBarContainer from "./search_bar_container";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    this.props.logout();
  }

  render() {
    return (
      // <div className="page">
        <section className="nav-bar-container">
          <div className="nav-left">
            <Link className="nav-icon" to={"/"}>
              <img
                className="lightmeter"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightmeter.png"
              />
              <div className="nav-link-logo">Fotobox</div>
            </Link>
          </div>
          <SearchBarContainer />
          <div className="nav-right">
            <Link className="nav-icon" to={`/users/my-profile`}>
              <img
                className="profile-display-pic"
                src={this.props.userProfilePic}
              />
            </Link>
            <Link className="nav-icon" to={`/newpost`}>
              <img
                className="post-form-icon"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/new_post.png"
              />
            </Link>
            <div className="nav-sign-out" onClick={this.Logout}>
              <img
                className="nav-sign-out-icon"
                src=" https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/logout.jpg"
              />
            </div>
          </div>
        </section>
      // </div>
    );
  }
}

export default withRouter(NavBar);
