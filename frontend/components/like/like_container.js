import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_actions";
import Like from "./like";
import { fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const post = ownProps.post;
  return {
    currentUser,
    post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
