import {
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case LOGIN_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser })
        case LOGOUT_USER:
            let newState = merge({}, oldState)
            delete newState[action.currentUser];
            return newState;
        default:
            return oldState
    }
}

export default usersReducer;