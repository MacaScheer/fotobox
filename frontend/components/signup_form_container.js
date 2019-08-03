import { signup, receiveResetErrors } from './../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';

import { Link } from 'react-router-dom';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => (
    {
        errors: state.errors.session,
        formType: "signup",
        navLink: <Link to="/login">log in instead</Link>
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        processForm1: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(receiveResetErrors())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)