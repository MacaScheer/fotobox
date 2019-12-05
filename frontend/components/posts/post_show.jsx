import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LikesContainer from "../like/like_container";
import Spinner from "../loading/Spinner";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.deleteComment = this.props.deleteComment.bind(this);
    this.fetchPost = this.props.fetchPost.bind(this);
    this.clearErrors = this.props.clearErrors.bind(this);
    this.state = {
      body: ""
    };
  }
  // componentWillMount() {
  //   if (this.props.match.params.postId) {
  //     this.props.fetchPost(this.props.match.params.postId);
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (this.props !== prevProps) {
  //     this.props.fetchPostComments(this.props.postId);
  //   }
  // }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
    this.props.fetchPostComments(this.props.postId);
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleDelete(e) {
    e.preventDefault();
    window.confirm(
      "Are you sure you want to delete this post from your box?"
    ) &&
      this.props.deletePost(this.props.post.id).then(res => {
        return this.props.closeModal();
      });
    // .then(() => {
    //   this.props.fetchProfilePosts(this.props.currentUser.id);
    // });
    // .then(() => {
    //   this.props.history.push(`/my-profile`);
    // });
  }

  handleComment(e) {
    e.preventDefault();
    const comment = { body: this.state.body, post_id: this.props.postId };
    this.props.createComment(comment);
    this.props.fetchPost(this.props.post.id).then(() => {
      this.props.clearErrors();
    });
    this.props.fetchPostComments(this.props.postId).then(() => {
      this.setState({ body: "" });
    });
  }
  renderErrors() {
    if (this.props.errors && this.props.errors.length > 0) {
      return (
        <ul className="login-errors modal-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }
  render() {
    const {
      photoUrl,
      author,
      body,
      likers,
      authorPhotoUrl,
      user_id,
      title,
      comments
    } = this.props.post;
    if (!this.props.post) {
      return (
        <h2>
          <Spinner />
        </h2>
      );
    }

    let postComments = Object.values(comments).map(comment => {
      return (
        <div
          key={Math.abs(comment.id - comment.user_id / 3)}
          className="post-show-comment"
        >
          <Link className="profile-link" to={`/users/${comment.user_id}`}>
            {comment.author}
          </Link>
          <span className="comment-body">&nbsp;{comment.body}</span>
          {comment.user_id === user_id ? (
            <button
              className="delete-comment-button"
              onClick={() =>
                this.props
                  .deleteComment(comment.id)
                  // .then(() => {
                  // debugger;
                  // this.props.fetchPost(this.props.post.id);
                  // this.props.fetchPostComments(this.props.post.id);
                  // })
                  .then(() => this.props.clearErrors())
              }
            >
              X
            </button>
          ) : (
            <div></div>
          )}
        </div>
      );
    });
    return (
      <div>
        {this.renderErrors()}
        <div className="post-box">
          <img className="post-show-image" src={photoUrl} />
          <div className="post-show-detail-box">
            <div className="post-author">
              <div className="post-author-links">
                <Link className="author-link" to={`/users/${user_id}`}>
                  <img className="feed-profile-pic" src={authorPhotoUrl} />
                  {author}
                </Link>
              </div>
              <div className="post-author-delete">
                {user_id === this.props.user.id ||
                this.props.user.username === this.props.post.author ? (
                  <button className="delete-button" onClick={this.handleDelete}>
                    <i className="fa fa-trash"></i>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="post-comments">
              <span>
                {body ? (
                  <div className="post-bio">
                    <Link
                      onClick={this.closeModal}
                      className="profile-link"
                      to={`/users/${user_id}`}
                    >
                      {author}
                    </Link>
                    &nbsp;{body}
                  </div>
                ) : (
                  <div></div>
                )}
              </span>
              <span>{postComments}</span>
            </div>
            <div className="post-show-likes">
              <div className="likes-div">
                <div className="show-buttons">
                  <LikesContainer post={this.props.post} likers={likers} />
                  <i className="post-title-show">{title}</i>
                </div>
                <div className="show-likecount">
                  {likers.length === 1
                    ? `${likers.length} like`
                    : `${likers.length} likes`}
                </div>
              </div>
              <div className="show-comment-container">
                <form className="show-comment-form">
                  <input
                    className="show-textarea"
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder="Add a comment..."
                  ></input>
                  <button
                    className="submit-comment-button"
                    onClick={this.handleComment}
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PostShow);
