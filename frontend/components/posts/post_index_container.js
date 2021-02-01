import PostIndex from "./post_index";
import { withRouter } from "react-router";
// import store from '..store/store';
import { fetchPosts, fetchPost, fetchTotalPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import {
  createComment,
  deleteComment,
  fetchPostComments
} from "../../actions/comment_actions";
const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments),
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    numTotal: state.session.total_posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUser: id => dispatch(fetchUser(id)),
    fetchTotalPosts: () => dispatch(fetchTotalPosts()),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchPost: id => dispatch(fetchPost(id)),
    fetchPosts: (s) => dispatch(fetchPosts(s)),
    // fetchPosts: page => dispatch(fetchPosts(page)),
    logout: () => dispatch(logout()),
    createLike: postId => dispatch(createLike(postId)),
    deleteLike: postId => dispatch(deleteLike(postId)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);
