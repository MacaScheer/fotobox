import {
    // RECEIVE_POSTS,
    // RECEIVE_POST,
    // REMOVE_POST
} from "../actions/post_actions";
import merge from "lodash/merge";

const commentsReducer = (oldState = {}, action) => {
    let newState = {};
    Object.freeze(oldState);
    switch (action.type) {
        // case RECEIVE_POST:
            newState = merge({}, oldState, { [action.post.id]: action.post });
            return newState;
        // case RECEIVE_POSTS:
            return (newState = merge({}, oldState, action.posts));
        // case REMOVE_POST:
            newState = merge({}, oldState);
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;
