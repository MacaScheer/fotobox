import { RECEIVE_CURRENT_USER, LOGOUT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/followings_actions";
import merge from "lodash/merge";

const usersReducer = (oldState = {}, action) => {
  let newState = merge({}, oldState);
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case LOGOUT_USER:
      delete newState[action.currentUser];
      return newState;
    case RECEIVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds.push(
        action.follow.user_id
      );
      newState[action.follow.user_id].followingIds.push(
        action.follow.followed_user_id
      );
      return newState;
    case REMOVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds = newState[
        action.follow.followed_user_id
      ].followerIds.filter(followerId => {
        followerId !== action.follow.user_id;
      });
      newState[action.follow.user_id].followingIds = newState[
        action.follow.user_id
      ].followingIds.filter(followingId => {
        followingId !== action.follow.followed_user_id;
      });
      return newState;

    default:
      return oldState;
  }
};
export default usersReducer;
