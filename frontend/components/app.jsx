import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Router, Route } from 'react-router-dom';
import Splash from './splash/splash';
import SplashContainer from './splash/splash_container';
import { AuthRoute } from '../util/route_util';
import PostIndexContainer from './post_index_container'
const App = () => (
    <div>
        <header>
            <h1>welcome to foto-box</h1>
            <SplashContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* <Route exact path="/" component={PostIndexContainer} /> */}
    </div>
)
export default App;