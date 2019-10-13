import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import { Router, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PostIndexContainer from "./posts/post_index_container";
import NavBarContainer from "./nav/nav_bar_container";
import ProfileContainer from "./profile/profile_container";
import PostShowContainer from "./posts/post_show_container";
import CreatePostContainer from "./posts/create_post_container";
import UserUpdateFormContainer from "./profile/user_update_form";
import UserShowContainer from "./profile/user_show_container";
import Modal from "./modal";
import { Switch } from "react-router-dom";
const App = () => (
  <div className="page">
    <Modal />
    <header className="headerBar"></header>
    <Switch>
      <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute
        exact
        path="/newpost/:userId"
        component={CreatePostContainer}
      />
      <ProtectedRoute path="/users/my-profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={UserShowContainer}
      />

      <ProtectedRoute path="/" component={NavBarContainer} />
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
      <ProtectedRoute
        exact
        path="/edit-profile"
        component={UserUpdateFormContainer}
      />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);
export default App;
