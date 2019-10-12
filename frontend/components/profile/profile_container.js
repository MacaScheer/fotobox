import Profile from "../profile/profile";
import { withRouter } from "react-router";
import { fetchPosts } from "../../actions/post_actions";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import { createFollow, removeFollow } from "../../actions/followings_actions";

const mapStateToProps = (state, ownProps) => {
  let profileId = ownProps.match.params.userId;
  let profileUser = state.entities.users[profileId];
  let currentUser = state.entities.users[state.session.id];
  let userPosts = null;
  let profile_picture = profileUser.photo_url;
  debugger;
  if (profileUser) {
    userPosts = Object.values(state.entities.posts).filter(
      post => post.user_id === profileUser.id
    );
  }

  return {
    profile_picture: profile_picture,
    userPosts: userPosts,
    profileId: profileId,
    profileUser: profileUser,
    currentUser: currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    logout: () => dispatch(logout()),
    fetchUser: user_id => dispatch(fetchUser(user_id)),
    createFollow: user_id => dispatch(createFollow(user_id)),
    removeFollow: user_id => dispatch(removeFollow(user_id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
