import * as ApiPost from "../util/post_api_util";
import { RECEIVE_CURRENT_USER } from "./session_actions";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_NUM = "RECEIVE_NUM"

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


const receiveNumPosts = num => ({
  type: RECEIVE_NUM,
  num
})

export const fetchPosts = page => dispatch => {
  return ApiPost.fetchPosts(page).then(posts => dispatch(receivePosts(posts)));
};

export const fetchPost = id => dispatch => {
  return ApiPost.fetchPost(id).then(post => dispatch(receivePost(post)));
};

export const deletePost = postId => dispatch => {
  return ApiPost.deletePost(postId).then(postId =>
    dispatch(removePost(postId))
  );
};

export const createPost = post => dispatch => {
  return ApiPost.createPost(post).then(post => dispatch(receivePost(post)));
};

export const fetchProfilePosts = (page, userId) => dispatch => {
  return ApiPost.fetchProfilePosts(page, userId).then(posts =>
    dispatch(receivePosts(posts))
  );
};

export const fetchNumPosts = (id) => dispatch => {
  return ApiPost.fetchNumPosts(id).then(num => 
    dispatch(receiveNumPosts(num)))
}