import React from "react";
import NavBarContainer from "../nav/nav_bar_container";
var debounce = require('debounce');


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.handleNewPostForm = this.handleNewPostForm.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.state = {
      page: 1
    }
    this.getPosts = this.getPosts.bind(this)
    this.infiniteScroller = this.infiniteScroller.bind(this)
  }
  getPosts() {
    this.props.fetchProfilePosts(this.state.page, this.props.currentUser.id);
    this.setState = { page: (this.state.page += 1) }
  }

  componentDidMount() {
    this.getPosts()
    this.props.fetchNumPosts(this.props.currentUser.id);
    // this.infiniteScroller();
    // this.props.fetchProfilePosts(this.props.currentUser.id);
    this.props.fetchUser(this.props.currentUser.id);
    // window.addEventListener("scroll", this.myScrollFunc);
    window.addEventListener("scroll", this.infiniteScroller);

    this.props.closeModal();
  }

  infiniteScroller() {
    // debugger
    window.onscroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
               this.getPosts()
            }
        }, 50)
    }

  handleNewPostForm(e) {
    e.preventDefault();
    let path = `/newpost`;
    this.props.history.push(path);
  }

  handleEditUser(e) {
    e.preventDefault();
    let path = `/edit-profile`;
    this.props.history.push(path);
  }

  render() {
    if (!this.props.profileUser) {
      return <h2>Loading...</h2>;
    }
    const {
      username,
      photoUrl,
      followerIds,
      followingIds
    } = this.props.profileUser;
    let userPhotos = this.props.userPosts.map(post => {
      return (
        <li key={post.id}>
          <div className="image-container">
            <div onClick={() => this.props.openModal({ postId: post.id })}>
              <img className="user-page-photos" src={post.photoUrl} />
              <div className="image-overlay">
                <p className="image-overlay-text">
                  <span className="overlay-heart">&#9829;</span>
                  {post.likers ? post.likers.length : 0}
                  <i className="comment" aria-hidden="true">
                    &#x1f4ac;
                  </i>
                  {post.commentIds ? post.commentIds.length : 0}
                  {/* {this.infiniteScroller()} */}
                </p>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div>
        <NavBarContainer />
        <div className="profile-wrap">
          <div className="profile-left"></div>
          <div className="profile-container">
            <div className="profile-top">
              <div className="profile-display-pic">
                <img
                  className="profile-display-pic"
                  src={this.props.profile_picture}
                />
              </div>
              <div className="profile-top-right">
                <div className="profile-top-up">
                  <h1>{username}</h1>
                  <div className="profile-top-buttons">
                    <button className="profile-button" onClick={this.logout}>
                      Log Out
                    </button>
                    <button
                      className="profile-button"
                      onClick={this.handleEditUser}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="profile-button"
                      onClick={this.handleNewPostForm}
                    >
                      Add Photo
                    </button>
                  </div>
                </div>
                <div className="profile-top-down">
                  <span>{this.props.numPosts} posts</span>
                  <span className="">{followerIds.length} Followers</span>
                  <span className="">{followingIds.length} Following</span>
                </div>
              </div>
            </div>
            <div className="profile-photo-index-container">
              <ul className="profile-photo-index">
                {userPhotos}
              </ul>
            </div>
          </div>
          <div className="profile-right"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
