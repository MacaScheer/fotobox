import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from "../actions/post_actions";

import { REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes_actions";
import merge from "lodash/merge";

const postsReducer = (oldState = {}, action) => {
  let newState = {};
  let newObj = {};
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      newState = merge({}, oldState, { [action.post.id]: action.post });
      return newState;
    case RECEIVE_POSTS:
      newState = merge({}, oldState, action.posts);
      return newState;
    case REMOVE_POST:
      newState = merge({}, oldState);
      delete newState[action.postId.postId];
      return newState;
    case RECEIVE_LIKE:
      newObj[action.like.post_id] = oldState[action.like.post_id];
      newObj[action.like.post_id].likers.push(action.like.user_id);
      newState = merge({}, oldState, newObj);
      return newState;
    case REMOVE_LIKE:
      let temp = oldState[action.like.post_id];
      let filtered_likers = temp.likers.filter(
        id => id !== action.like.user_id
      );
      temp.likers = filtered_likers;
      newState = merge({}, oldState, { [action.like.post_id]: temp });
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      let comments = newState[action.comment.comment.post_id].comments;
      newState[action.comment.comment.post_id].comments = comments.filter(com => com.id !== action.comment.comment.id)
      return newState
    default:
      return oldState;
  }
};

export default postsReducer;
