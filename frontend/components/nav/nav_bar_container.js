import { connect } from "react-redux";
import { withRouter } from "react-router";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { createPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  let userProfilePic = currentUser.photo_url;
  return { currentUser: currentUser, userProfilePic };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
