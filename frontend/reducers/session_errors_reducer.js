import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_RESET_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  let newState = [];
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return newState;
    case RECEIVE_RESET_ERRORS:
      return newState;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
