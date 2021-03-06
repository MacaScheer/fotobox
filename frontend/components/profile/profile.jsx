import React from "react";
import ProfileIndexItem from "./profile_index_item";
// import useInfiniteScroll from "./useInfiniteScroll";
import Spinner from "../loading/Spinner";



class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.handleNewPostForm = this.handleNewPostForm.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.state = {
      page: 0,
      // numPosts:0
    }
    this.getPosts = this.getPosts.bind(this)
    this.scroller = this.scroller.bind(this)
    this.incrementStart = this.incrementStart.bind(this);
  }

  getPosts() {
    this.props.fetchProfilePosts(this.state.page, this.props.currentUser.id).then(() => this.incrementStart())
  }

  incrementStart() {
    // console.log("firstkey: ", this.state.page, " numPosts: ", this.props.numPosts)
    // if (this.state.page < this.props.numPosts) { 
    // console.log("page: ", this.state.page, " numPosts: ", this.props.numPosts)
      let num = this.state.page === 0 ? 15 : this.state.page + 8
      this.setState({ page: num })
    // }
  }

  componentDidMount() {
    this.getPosts()
    this.props.fetchNumPosts(this.props.currentUser.id);
    this.props.fetchUser(this.props.currentUser.id);
    document.addEventListener('scroll', this.scroller)
    this.props.closeModal();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scroller)
  }
  
  scroller() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.state.page < this.props.numPosts || this.props.numPosts === undefined) {
        this.getPosts()
      }
    }
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
    
    if (this.props.userPosts.length === 0) {
      return <div className="page">
        <Spinner />
      </div>
    }
    const {
          username,
          followerIds,
          followingIds
                  } = this.props.profileUser;
    let userPhotos = this.props.userPosts.map(post => {
      return (
        <ProfileIndexItem post={post} key={post.photoUrl} openModal={this.props.openModal} />
      );
    });

        let photoGrid = userPhotos.length === 0 ? (<div className="empty-posts"><h1 className="no-user-posts">No Posts Yet!</h1></div>) :
       (<div className="profile-photo-index-container">
            <ul className="profile-photo-index">{userPhotos}</ul>
        </div>)
    return (
        <div className="profile-wrap">
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
                  <span className="num">{this.props.numPosts} posts</span>
                  <span className="num">{followerIds.length} Followers</span>
                  <span className="num">{followingIds.length} Following</span>
                </div>
              </div>
            </div>
          {photoGrid}
          {/* {userPhotos.length === this.props.numUserPosts ?
            (<div className="no-more-posts">no more posts!</div>) :
            (<div>...</div>)} */}
          </div>
        </div>
    );
  }
}

export default Profile;
