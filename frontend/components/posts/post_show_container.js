import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { withRouter } from 'react-router';

const mapStateToProps = function (state, ownProps) {
    // debugger
    const postId = ownProps.match.params.postId;
    const userId = ownProps.match.params.user_id;
    let post = state.entities.posts[postId]
    // if (post) {
    //     post = Object.assign({}, post, { author: state.users[post.user_id] });
    // }

    return {
        postId: postId,
        userId: userId,
        post: post
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
        fetchPost: (postId) => dispatch(fetchPost(postId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));