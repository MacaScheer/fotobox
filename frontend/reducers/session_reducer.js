import {
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/session_actions';


const defaultState = {
    id: null
}

const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case LOGIN_USER:
            return { id: action.currentUser.id }
        case LOGOUT_USER:
            return defaultState;
        default:
            return oldState;
    }
}

export default sessionReducer;