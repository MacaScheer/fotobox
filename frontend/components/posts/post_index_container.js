import PostIndex from "./post_index";
import { withRouter } from "react-router";
// import store from '..store/store';
import { fetchPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { createLike, deleteLike } from "../../actions/likes_actions";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUser: id => dispatch(fetchUser(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    logout: () => dispatch(logout()),
    createLike: postId => dispatch(createLike(postId)),
    deleteLike: postId => dispatch(deleteLike(postId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostIndex)
);
