import React from "react";
import NavBarContainer from "../nav/nav_bar_container";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../loading/Spinner";

import ProfileIndexItem from "./profile_index_item";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.userPosts = this.props.userPosts;
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.handleNewPostForm = this.handleNewPostForm.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.scroller = this.scroller.bind(this)
    // this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.getPosts = this.getPosts.bind(this)
    this.state = {
      page: 1
    }
  }

  getPosts() {
    this.props.fetchProfilePosts(this.state.page, this.props.currentUser.id).then(() => this.incrementStart())
  }

  incrementStart() {
    let num = this.state.page + 8
    this.setState({ page: num })
  }
  // getPosts() {
  //   // TO BE OPTIMIZED BY CONSTANT SIZE BATCH FETCHING
  //   this.props.fetchProfilePosts(this.state.page, this.props.match.params.userId);
  //   this.setState = { page: (this.state.page += 1) }
  // }
  componentDidMount() {
    let id = this.props.match.params.userId
    this.getPosts()
    this.props.fetchUser(id);
    this.props.fetchNumPosts(id)
    this.props.closeModal();
    // this.infiniteScroller()
    window.addEventListener("scroll", this.scroller);

  }


  scroller() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (this.state.page < this.props.numUserPosts || this.props.numUserPosts === undefined) {
          console.log(`page:${page}, numUserPosts:${this.props.numUserPosts}`)
          this.getPosts()
        }
      }
    }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getPosts();
      this.props.fetchUser(this.props.match.params.userId);
      this.props.closeModal();
    }
  }
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.myScrollFunc);
    window.removeEventListener("scroll", this.scroller)
  }

  handleFollow(e) {
    e.preventDefault();
    this.props
      .createFollow({ followed_user_id: this.props.profileUser.id })
      .then(() => this.props.fetchUser(this.props.profileUser.id));
  }

  handleUnfollow(e) {
    e.preventDefault();
    this.props.deleteFollow(this.props.profileUser.id).then(() => {
      this.props.fetchUser(this.props.profileUser.id);
    });
  }

  handleNewPostForm(e) {
    e.preventDefault();
    this.props.history.push(`/newpost`);
  }

  handleEditUser(e) {
    e.preventDefault();
    this.props.history.push(`/edit-profile`);
  }

  // handleDeleteUser(e) {
  //   e.preventDefault();
  //   window.confirm("Are you sure you want to delete this account?") &&
  //     this.props.deleteUser(this.props.profileUser.id);
  // }

  render() {
    if (this.props.profileUser === undefined) {
      return <div className="page">
        <Spinner />
      </div>
    }
    const {
      username,
      photo_url,
      id,
      followerIds,
      followingIds
    } = this.props.profileUser;
    let userPhotos = this.props.userPosts.map(post => {
      return (
        <ProfileIndexItem post={post} key={post.photoUrl} openModal={this.props.openModal} />
      );
    })

    let photoGrid = userPhotos.length === 0 ? (<div className="empty-posts"><h1 className="no-user-posts">No Posts Yet!</h1></div>) :
       (<div className="profile-photo-index-container">
            <ul className="profile-photo-index">{userPhotos}</ul>
        </div>)
    
    return (
        <div className="profile-wrap">
          <div className="profile-container">
            <div className="profile-top">
              <div className="profile-display-pic">
                <img className="profile-display-pic" src={photo_url} />
              </div>
              <div className="profile-top-right">
                <div className="profile-top-up">
                  <h1>{username}</h1>
                  {id === this.props.currentUser.id ? (
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
                  ) : (
                    <div className="profile-top-buttons">
                      {this.props.profileUser.followerIds.includes(
                        this.props.currentUser.id
                      ) ? (
                        <button
                          className="profile-button"
                          onClick={this.handleUnfollow}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <button
                          className="profile-button"
                          onClick={this.handleFollow}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  )}
                </div>
              <div className="profile-top-down">{this.props.numUserPosts ? (
                <span>{this.props.numUserPosts} Posts</span>
                ) : <span></span>}
                  <span className="">{followerIds.length} Followers</span>
                  <span className="">{followingIds.length} Following</span>
                </div>
                {this.props.currentUser.username === "fotoboxAdmin" &&
                this.props.profileUser.username !== "fotoboxAdmin" ? (
                  <button
                    className="profile-button remove-user"
                    onClick={this.handleDeleteUser}
                  >
                    Remove User
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            {photoGrid}
          </div>
        </div>
    );
  }
}
export default withRouter(UserShow);
