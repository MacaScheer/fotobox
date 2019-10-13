import * as ApiPost from "../util/post_api_util";
import { RECEIVE_CURRENT_USER } from "./session_actions";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};
const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};
const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => {
  return ApiPost.fetchPosts().then(posts => dispatch(receivePosts(posts)));
};

export const fetchPost = id => dispatch => {
  return ApiPost.fetchPost(id).then(post => dispatch(receivePost(post)));
};

export const deletePost = postId => dispatch => {
  return ApiPost.deletePost(postId).then(post => dispatch(removePost(postId)));
};

export const createPost = post => dispatch => {
  return ApiPost.createPost(post).then(post => dispatch(receivePost(post)));
};

export const fetchProfilePosts = userId => dispatch => {
  return ApiPost.fetchProfilePosts(userId).then(posts =>
    dispatch(receivePosts(posts))
  );
};
