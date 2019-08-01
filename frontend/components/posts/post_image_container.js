import PostIndex from './post_index';
// import store from '..store/store';
import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
    return { fetchPosts: () => dispatch(fetchPosts()) }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);