import {
  RECEIVE_COMMENT,
  RECEIVE_POST_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";
import merge from "lodash/merge";
// let initialState = null;
const commentsReducer = (oldState= null, action) => {
  let newState = {};
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, oldState, { [action.comment.id]: action.comment });
    case RECEIVE_POST_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;
