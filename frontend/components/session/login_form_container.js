import { login, receiveResetErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';


import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => (
    {
        errors: state.errors.session,
        formType: "login",
        navLink: <Link to="/signup" > log in instead</Link>
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(receiveResetErrors())
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)