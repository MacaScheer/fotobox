import {
    RECEIVE_CURRENT_USER,
    LOGOUT_USER
} from '../actions/session_actions';
import { RECEIVE_TOTAL } from '../actions/post_actions';
import merge from "lodash/merge";

const defaultState = Object.freeze({
    id: null
})

const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TOTAL:
            let newState = merge({}, oldState, { "total_posts": action.num })
            return newState
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_USER:
            return defaultState;
        default:
            return oldState;
    }
}

export default sessionReducer;