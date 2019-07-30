import * as ApiUtil from '../util/session_api_util';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: LOGIN_USER,
    currentUser: currentUser
});
const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors
    }
};

export const login = user => dispatch => (
    ApiUtil.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error))));

export const signup = user => dispatch => (
    ApiUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error))));

export const logout = () => dispatch => (
    ApiUtil.logout().then(
        user => dispatch(logoutCurrentUser())));