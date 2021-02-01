import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_RESET_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return newState;
    case RECEIVE_RESET_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
