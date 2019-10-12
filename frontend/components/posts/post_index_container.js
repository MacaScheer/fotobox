import PostIndex from "./post_index";
import { withRouter } from "react-router";
// import store from '..store/store';
import { fetchPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => {
    return {
        posts: Object.values(state.entities.posts),
        currentUser : state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUser: id => dispatch(fetchUser(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostIndex)
);
