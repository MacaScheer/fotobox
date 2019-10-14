import PostIndexItem from "./post_index_item";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchPost, deletePost } from "../../actions/post_actions";
import {
  deleteComment,
  createComment,
  fetchPostComments
} from "../../actions/comment_actions";

const mapStateToProps = state => {
  let comments;
  if (state.entities.comments) {
    comments = Object.values(state.entities.comments);
  }
  return {
    currentUser: state.entities.users[state.session.id],
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    createLike: postId => dispatch(createLike(postId)),
    deleteLike: postId => dispatch(deleteLike(postId)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostIndexItem)
);
