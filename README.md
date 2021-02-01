<h1 align="center">Fotobox</h1>
<div align="center">Fotobox is a photo-sharing social network inspired by Instagram. Fotobox users can post and share photographs uploaded directly from their local files. Users can follow other users to see their posts, updated in their "feed". Users can "like" and comment on other user's posts.</div>

<div align="center">
  <!-- Stability -->
<img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  <!-- NPM version -->
  <img src="https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen"
      alt="NPM version" />
  <!-- Build Status -->
 <img src="https://img.shields.io/badge/build-passing-brightgreen"
      alt="Build Status" />
</div>

[Live Site][1]


<p align="center">
  <img width="auto" height="auto" object-fit="contain" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_profile_client.png">
</p>

## Table of Contents

---
- [Features](#features)
- [Technology](#technology)
- [API](#API)
- [Setup](#setup)

## Features

- Login / Registration Authentication
- AWS Storage
- React Redux Store
- Post CRUD
- Create and Delete Comments
- Follow/Unfollow Users
- Like/Unlike Posts
- Number of Followers, Likes, Comments on Posts
- Image Feed
- User Profile

### Technical Challenges

Fotobox is a minimal viable product that tackles three challenges in application development, software engineering, and user experience. 

## Technology

### Backend
+ PostgreSQL
+ Rails 5
+ Active Records
+ BCrypt
+ JBuilder
+ AWS S3

### Frontend
+ Nodejs
+ React
+ Redux
+ jQuery

### Docker Services
+ db - PostgreSQL
+ web - Rails
+ frontend - React


### User Account Authentification

Passwords are secured using the `BCrypt` gem to generate a *password digest*. 
A user's login session is tracked by a generated *session token* stored in the database and on the client-side as a browser cookie.

```ruby
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) || User.find_by(email: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

<main id="root"></main>

<% if logged_in? %>
  <script type="text/javascript">
    window.currentUser = <%= render(
    "api/users/user.json.jbuilder",
      user: current_user
    ).html_safe %>
    </script>
<% end %>
```

### AWS

Setting up aws configuration for aws file storage.

```yml
amazon_dev:
  service: S3
  access_key_id: <%= Rails.application.credentials.aws[:access_key_id] %>
  secret_access_key: <%= Rails.application.credentials.aws[:secret_access_key] %>
  region: <%= Rails.application.credentials.aws[:region] %>
  bucket: <%= Rails.application.credentials.aws[:dev][:bucket] %>

amazon_prod:
  service: S3
  access_key_id: <%= Rails.application.credentials.aws[:access_key_id] %>
  secret_access_key: <%= Rails.application.credentials.aws[:secret_access_key] %>
  region: <%= Rails.application.credentials.aws[:region] %>
  bucket: <%= Rails.application.credentials.aws[:prod][:bucket] %>
```
```js
handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
      formData.append("post[title]", this.state.title);
      formData.append("post[location]", this.state.location);
      formData.append("post[user_id]", this.props.currentUser.id);
    }
    $.ajax({
      url: "/api/posts",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      this.props.history.push("/users/my-profile");
    });
  }

```
### Posts Controller
```ruby
class Api::PostsController < ApplicationController
    
    before_action :require_signed_in!

    def index
        num = params[:page].to_i * 3
        @posts = Post.with_attached_photo.order('created_at DESC').last(num)
        render :index
    end
    
    def show
        @post = Post.find(params[:id])
        render :show

    end

    def profile_posts
      num = params[:page].to_i * 9
        @posts = Post.where(user_id: params[:id]).order('created_at DESC').last(num)
        render :index
    end

    def num_posts
      @posts_num = Post.where(user_id: params[:id]).count()
      render json:  [@posts_num, params[:id]]
    end

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def edit
        @post = Post.find(params[:id]) 
    end
```
### Users Reducer
```js
const usersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case LOGOUT_USER:
      delete newState[action.currentUser];
      return newState;
    case RECEIVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds.push(
        action.follow.user_id
      );
      newState[action.follow.user_id].followingIds.push(
        action.follow.followed_user_id
      );
      return newState;
    case REMOVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds = newState[
        action.follow.followed_user_id
      ].followerIds.filter(followerId => {
        followerId !== action.follow.user_id;
      });
      newState[action.follow.user_id].followingIds = newState[
        action.follow.user_id
      ].followingIds.filter(followingId => {
        followingId !== action.follow.followed_user_id;
      });
      return newState;
    case RECEIVE_NUM:
      newState[action.num[1]]["numUserPosts"] = action.num[0];
      return newState
    default:
      return state;
  }
};
export default usersReducer;
```

## API
### Rails Routes
```ruby
Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update, :destroy] do
      resources :followings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy] do
      resources :comments, only: [:index]
    end
          resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :show]
    resources :followings, only: [:create, :destroy, :show]
    get 'profile/posts/:id', :to => 'posts#profile_posts'
    get 'profile/num_posts/:id', :to => 'posts#num_posts'
    get 'feed/posts', :to => 'posts#feed_posts'
    get 'explore/posts', :to => 'posts#explore_posts'
  
  end
end
```

### Active Record Models
```ruby
class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :posts,
    dependent: :destroy

    has_one_attached :profile_picture,
    dependent: :destroy

    has_many :comments,
    dependent: :destroy

    has_many :likes,
    dependent: :destroy

    has_many :active_follows,  
    class_name: :Following,
    foreign_key: :user_id,
    dependent: :destroy

    has_many :passive_follows, 
    class_name: :Following,
    foreign_key: :followed_user_id,
    dependent: :destroy

    has_many :followings, 
    through: :active_follows,
    source: :following,
    dependent: :destroy

    has_many :followers, 
    through: :passive_follows, 
    source: :follower,
    dependent: :destroy
end

class Following < ApplicationRecord
validates :user_id, uniqueness: {scope: :followed_user_id}

belongs_to :following,
class_name: :User,
foreign_key: :followed_user_id

belongs_to :follower,
class_name: :User,
foreign_key: :user_id

end
```

### Active Record Schema
```ruby
ActiveRecord::Schema.define(version: 2019_10_11_041620) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "post_id"
    t.integer "user_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "followings", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "followed_user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_user_id"], name: "index_followings_on_followed_user_id"
    t.index ["user_id", "followed_user_id"], name: "index_followings_on_user_id_and_followed_user_id", unique: true
    t.index ["user_id"], name: "index_followings_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "post_id"
    t.integer "user_id"
    t.index ["post_id"], name: "index_likes_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["location"], name: "index_posts_on_location"
    t.index ["title"], name: "index_posts_on_title"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
```

### Post Views jBuilder
```ruby
 json.partial! 'api/posts/post', post: @post

 json.extract! post, :id, :user_id, :title, :location
json.author post.user.username
json.authorPhotoUrl url_for(post.user.profile_picture)
json.photoUrl url_for(post.photo)
json.likers post.likers.pluck(:id)

json.commentIds post.comment_ids
json.comments post.comments do |comment|
    json.author comment.user.username
    json.user_id comment.user_id
    json.body comment.body
    json.post_id comment.post_id
    json.id comment.id
end
```

### React Store

Frontend React-Redux store layout.
```js
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root";
import Modal from "react-modal";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: { [id]: currentUser }
      },
      session: { id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});
```

### Thunk Middleware
```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
```

### Protected and Auth Routes
```js
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
```

Running local dev

```sh
$ npm install && npm install --prefix frontend
$ npm run dev 
```

[1]: https://foto-box.herokuapp.com