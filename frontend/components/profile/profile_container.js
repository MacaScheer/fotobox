import Profile from '../profile/profile';
import { withRouter } from 'react-router';
// import store from '..store/store';
import { fetchPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return { posts: Object.values(state.entities.posts) }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout()),
        fetchUser: (user) => dispatch(fetchUser(user))
    }
}




export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));