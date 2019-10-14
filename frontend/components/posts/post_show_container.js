import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost, deletePost } from "../../actions/post_actions";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router";

const mapStateToProps = function(state, ownProps) {
  const postId = ownProps.match.params.postId;
  const userId = ownProps.match.params.user_id;
  let post = state.entities.posts[postId];
  // if (post) {
  //     post = Object.assign({}, post, { author: state.users[post.user_id] });
  // }

  return {
    postId: postId,
    userId: userId,
    post: post
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
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
  )(PostShow)
);
