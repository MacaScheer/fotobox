import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        logout: () => dispatch(logout())

    }
}




export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar));