import * as CommentAPI from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
  errors: []
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createComment = comment => dipatch => (
  CommentAPI.createComment(comment).then(com => dispatch(receiveComment(com))),
  err => dispatch(receiveErrors(err, responseJSON))
);

export const fetchPostComments = post_id => dispatch =>
  CommentAPI.fetchPostComments(post_id).then(comments => {
    debugger;
    return dispatch(receivePostComments(comments));
  });

export const deleteComment = id => dispatch =>
  CommentAPI.deleteComment(id).then(comment => {
    debugger;
    return dispatch(removeComment(comment));
  });
