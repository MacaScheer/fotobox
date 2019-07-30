import {
    RECEIVE_ERRORS,
    LOGIN_USER
} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
    let newState;
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case LOGIN_USER:
            return [];
        default:
            return oldState;
    }
}


export default sessionErrorsReducer;