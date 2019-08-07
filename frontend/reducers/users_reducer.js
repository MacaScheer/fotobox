import {
    RECEIVE_CURRENT_USER,
    LOGOUT_USER,
} from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            return merge({}, oldState, { [action.user.id]: action.user });
        case LOGOUT_USER:
            let newState = merge({}, oldState)
            delete newState[action.currentUser];
            return newState;
        default:
            return oldState;
    }
}
export default usersReducer;