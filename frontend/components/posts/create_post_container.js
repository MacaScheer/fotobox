import CreatePost from './create_post';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
// import { receiveResetErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        // errors: state.errors.session,
        currentUser: state.entities.users[state.session.id],
        photo: "", title: "", location: ""
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        fetchUser: (id) => dispatch(fetchUser(id))
        // clearErrors: () => dispatch(receiveResetErrors())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost);