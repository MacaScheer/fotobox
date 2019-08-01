import { signup } from './../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';

import { Link } from 'react-router-dom';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => (
    {
        errors: state.errors.session,
        formType: "Sign up",
        navLink: <Link to="/login">log in instead</Link>
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    { processForm: (user) => dispatch(signup(user)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)