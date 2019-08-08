import CreatePost from './create_post';
// import PostIndex from './post_index';
// import store from '..store/store';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        currentUser : state.entities.users[state.session.id],
        photo: "", title: "", location: ""
    }
}

const mapDispatchToProps = (dispatch) => {
    return { createPost: (post) => dispatch(createPost(post)) }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost);