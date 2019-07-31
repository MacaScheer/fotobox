import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultUsername: "Phone number, username, or email",
            defaultPassword: "Password"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearDefaultFields = this.clearDefaultFields.bind(this);
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
    clearDefaultFields() {

        if (this.value === this.state.defaultUsername) {
            return this.state.defaultUsername = "";
        } else if (this.value === this.state.defaultPassword) {

            return this.state.defaultPassword = "";
        }
    }
    render() {
        let path = "/login"
        let title = "signup"
        let altTitle = "Log in"
        let instruc = "Already have an account?"
        if (this.props.formType === 'login') {
            title = "login";
            path = "/signup"
            altTitle = "Sign up"
            instruc = "Don't have an account?"
        };

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="instagram-greet">Instagram</h1>
                    {this.errors()}
                    <br />
                    <h2>{title}</h2>

                    <label>Username
                        <input type="text"
                            className="login-input"
                            onChange={this.handleInput('username')}
                            value={this.state.defaultUsername}
                            // value={this.state.username}
                            onFocus={this.clearDefaultFields}
                        />
                    </label>

                    <label>Password
                        <input type="text"
                            className="login-input"
                            onChange={this.handleInput('password')}
                            value={this.state.defaultPassword}
                            // value={this.state.password}
                            onFocus={this.clearDefaultFields}
                        />
                    </label>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    {/* <button onClick={this.handleSubmit}>Submit</button> */}
                    <br />
                    <div className="alt-box">
                        <h3>{instruc}</h3>
                        <Link to={path}>{altTitle}</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;