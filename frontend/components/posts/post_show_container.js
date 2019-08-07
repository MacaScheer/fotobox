import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { withRouter } from 'react-router';

const mapStateToProps = function (state, ownProps) {
    const postId = ownProps.match.params.postId;
    let post = state.posts[postId]
    // debugger;
    if (post) {
        post = Object.assign(
            {},
            post,
            { author: state.users[post.user_id] }
        );
    }

    return {
        post: post
    };
};

// {
//   bleats: {
//     1: {id: 1, body: "something", author_id: 1},
//     2: {id: 2, body: "something else", author_id: 1}
//   },
//   users: {
//     1: {id: 1, email: "tommy@appacademy.io"}
//   }
// }

const mapDispatchToProps = function (dispatch, ownProps) {
    const postId = ownProps.match.params.postId;
    return {
        fetchPost: () => dispatch(fetchPost(postId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));