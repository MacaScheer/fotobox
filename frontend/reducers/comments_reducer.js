import {
  RECEIVE_COMMENT,
  RECEIVE_POST_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";
import merge from "lodash/merge";
// let initialState = null;
const commentsReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_POST_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
