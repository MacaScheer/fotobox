import * as CommentAPI from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receivePostComments = comments => {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  };
};

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

export const createComment = comment => dispatch => {
  return (
    CommentAPI.createComment(comment).then(comment => {
      return dispatch(receiveComment(comment));
    }),
    err => dispatch(receiveErrors(err, responseJSON))
  );
};

export const fetchPostComments = post_id => dispatch => {
  return CommentAPI.fetchPostComments(post_id).then(comments =>
    dispatch(receivePostComments(comments))
  );
};

export const deleteComment = comment => dispatch => {
  return CommentAPI.deleteComment(comment).then(comment => {
    return dispatch(removeComment(comment));
  });
};
