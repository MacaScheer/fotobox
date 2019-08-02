import PostIndex from './post_index';
// import store from '..store/store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout())
    }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);