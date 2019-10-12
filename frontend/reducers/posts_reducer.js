import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from "../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes_actions";
import merge from "lodash/merge";

const postsReducer = (oldState = {}, action) => {
  let newState = {};
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      newState = merge({}, oldState, { [action.post.id]: action.post });
      return newState;
    case RECEIVE_POSTS:
      return (newState = merge({}, oldState, action.posts));
    case REMOVE_POST:
      newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    case RECEIVE_LIKE:
      newState[action.like.postId].likers.push(action.like.user_id);
      return newState;
    case REMOVE_LIKE:
      return newState[action.like.postId].liker.filter(
        user_id => user_id !== action.like.user_id
      );
    default:
      return oldState;
  }
};

export default postsReducer;
