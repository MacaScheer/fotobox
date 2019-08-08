import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import { Router, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostIndexContainer from './posts/post_index_container'
import NavBarContainer from './nav/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import PostShowContainer from './posts/post_show_container';
import CreatePostContainer from './posts/create_post_container';
const App = () => (
    <div>
        <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />
        <ProtectedRoute path="/posts/" component={CreatePostContainer} />
        <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={PostIndexContainer} />
    </div>
)
export default App;