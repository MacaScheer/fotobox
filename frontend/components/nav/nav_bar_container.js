import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))

    }
}




export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar));