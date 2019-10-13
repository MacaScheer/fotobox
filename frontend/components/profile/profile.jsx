import React from "react";
import { withRouter } from "react-router";
import ProfileIndexItem from "./profile_index_item";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // this.userPosts = this.props.userPosts
    this.handleLogout = this.handleLogout.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  handleEditUser(e) {
    e.preventDefault();
    let path = `/edit-profile`;
    this.props.history.push(path);
  }
  render() {
    let userPosts = this.props.userPosts.reverse().map((post, i) => (
      <li>
        <ProfileIndexItem
          title={post.title}
          id={post.id}
          location={post.location}
          photo_url={post.photo_url}
          key={i}
        />
      </li>
    ));
    return (
      <div className="profile-wrap">
        <div className="profile-left"></div>
        <div className="profile-container">
          <div className="profile-top">
            <div className="profile-display-pic-holder">
              <img
                className="profile-display-pic"
                src={this.props.profile_picture}
              />
            </div>
            <div className="profile-top-right">
              <div className="profile-top-up">
                <h1 className="username-header">{this.props.username}</h1>
                <div className="profile-top-buttons">
                  <button
                    className="profile-button"
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </button>
                  <button
                    className="profile-button"
                    onClick={this.handleEditUser}
                  >
                    Edit Profile
                  </button>
                  <Link to={`/newpost/${this.props.currentUser.id}`}>
                    <button className="profile-button">Add Photo</button>
                  </Link>
                </div>
              </div>
              <div className="profile-top-down">
                <span className="num-posts">{this.num_posts}posts</span>
                <span className="num-followers">
                  {this.num_followers}followers
                </span>
                <span className="num-following">
                  {this.num_following}following
                </span>
              </div>
            </div>
          </div>
          <div className="profile-photo-index-container">
            <ul className="profile-photo-index">{userPosts}</ul>
          </div>
        </div>
        <div className="profile-right"></div>
      </div>
    );
  }
}
export default withRouter(Profile);
