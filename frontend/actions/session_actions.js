import * as ApiUtil from '../util/session_api_util';

export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_RESET_ERRORS = "RECEIVE_RESET_ERRORS"

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
};

export const receiveResetErrors = () => {
    return {
        type: RECEIVE_RESET_ERRORS
    }
};

export const login = user => dispatch => (
    ApiUtil.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveSessionErrors(error))));

export const signup = user => dispatch => (
    ApiUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveSessionErrors(error))));

export const logout = () => dispatch => (
    ApiUtil.logout().then(
        user => dispatch(logoutCurrentUser())));