import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    }
    errors() {
        if (this.props.errors.responseJSON) {
            return (<ul>
                {this.props.errors.responseJSON.map((error, i) => (<li key={i}>{error}</li>))}
            </ul>)
        }
    }
    render() {
        let path = "/login"
        let title = "signup"
        let altTitle = "LOGIN"
        if (this.props.formType === 'login') {
            title = "login";
            path = "/signup"
            altTitle = "SIGNUP"
        };
        return (
            <div>
                {this.errors()}
                <br />
                <h2>{title}</h2>
                <label>Username
                    <input type="text" onChange={this.handleInput('username')} value={this.state.username} />
                </label>
                <label>Password
                    <input type="text" onChange={this.handleInput('password')} value={this.state.password} />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
                <br />
                <Link to={path}>{altTitle}</Link>
            </div>
        )
    }
}

export default SessionForm;