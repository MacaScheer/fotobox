
import PostIndex from './post_index';
// import store from '..store/store';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
    return { createPost: (post) => dispatch(createPost(post)) }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost);