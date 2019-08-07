import Profile from '../profile/profile';
import { withRouter } from 'react-router';
import { fetchPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    let profileId = ownProps.match.params.userId;
    let profileUser = state.entities.users[profileId];
    let currentUser = state.entities.users[state.session.id];
    let userPosts = null;

    if (profileUser) {
        userPosts = Object.values(state.entities.posts)
            .filter(post => post.user_id === profileUser.id)
    }

    return {
        userPosts: userPosts,
        profileId: profileId,
        profileUser: profileUser,
        currentUser: currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}




export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));