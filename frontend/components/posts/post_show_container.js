import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost, deletePost } from "../../actions/post_actions";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import {
  fetchPostComments,
  createComment,
  deleteComment,
  clearErrors
} from "../../actions/comment_actions";

import { withRouter } from "react-router";

const mapStateToProps = function(state, ownProps) {
  const user = state.entities.users[state.session.id];
  const postId = ownProps.data
    ? ownProps.data.postId
    : ownProps.match.params.postId;

  const userId = state.entities.users[state.session.id].id;
  const errors = state.errors.comment;
  // const userId = ownProps.match.params.user_id;
  let post = state.entities.posts[postId];
  // state.entities.posts[ownProps.match.params.postId]
  // if (post) {
  //     post = Object.assign({}, post, { author: state.users[post.user_id] });
  // }

  return {
    user,
    postId,
    userId,
    post,
    errors
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    createLike: postId => dispatch(createLike(postId)),
    deleteLike: postId => dispatch(deleteLike(postId)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal()),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostShow)
);
