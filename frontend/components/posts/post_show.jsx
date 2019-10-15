import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LikesContainer from "../like/like_container";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.state = {
      body: ""
    };
  }
  componentDidMount() {
    this.props.fetchPost(this.props.post.id);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleDelete(e) {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this post?") &&
      this.props
        .deletePost(this.props.post.id)
        .then(() => {
          this.props.closeModal();
        })
        .then(() => {
          this.props.history.push(`/my-profile`);
        });
  }

  handleComment(e) {
    e.preventDefault();
    const comment = { body: this.state.body, post_id: this.props.post.id };
    this.props.createComment(comment);
    this.props.fetchPost(this.props.post.id).then(() => {
      this.props.clearErrors();
    });
    this.setState({ body: "" });
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
    if (!this.props.post) {
      return <h2>Loading...</h2>;
    }

    let postComments = Object.values(this.props.post.comments).map(comment => {
      return (
        <div
          key={Math.abs(comment.id - comment.user_id / 3)}
          className="post-show-comment"
        >
          <Link className="profile-link" to={`/users/${comment.user_id}`}>
            {comment.author}
          </Link>
          <span className="comment-body">&nbsp;{comment.body}</span>
          {comment.user_id === this.props.user_id ? (
            <button
              className="delete-comment-button"
              onClick={() =>
                this.props
                  .deleteComment(comment.id)
                  .then(() => {
                    this.props.fetchPost(this.props.post.id);
                  })
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
    const {
      photoUrl,
      author,
      body,
      likers,
      authorPhotoUrl,
      user_id
    } = this.props.post;

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
                this.props.user.username === "BarkstagramAdmin" ? (
                  <button className="delete-button" onClick={this.handleDelete}>
                    <i className="fas fa-trash-alt"></i>
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
                  <i
                    className="fas fa-paw show-icon"
                    onClick={this.handleComment}
                  ></i>
                </div>
                <div className="show-likecount">
                  {likers.length === 1
                    ? `${likers.length} like`
                    : `${likers.length} likes`}
                </div>
              </div>
              <div className="show-comment-container">
                <form className="show-comment-form">
                  <textarea
                    className="show-textarea"
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder="Add a comment..."
                  ></textarea>
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

  //   if (!this.props.post) {
  //     return <span>Loading</span>;
  //   }
  //   let { post } = this.props;

  //   return (
  //     <div className="post-show-wrapper">
  //       <section className="post-show-page">
  //         <div className="post-show-container">
  //           <div className="post-box">
  //             <div className="post-show-image">
  //               <img className="post-show-image" src={post.photoUrl} />
  //             </div>
  //             <div className="post-show-detail-box">
  //               <div className="post-author">
  //                 <div className="post-author-links">
  //                   <Link
  //                     className="author-link"
  //                     to={`/users/${this.props.user_id}`}
  //                   ></Link>
  //                   <button
  //                     className="post-author-delete"
  //                     onClick={this.handleDelete}
  //                   >
  //                     Delete Post
  //                   </button>
  //                 </div>
  //               </div>
  //               <div className="post-show-comments"></div>
  //               <div className="post-show-likes">
  //                 <div className="likes-div">
  //                   <div className="show-buttons">
  //                     <div className="like-button-div">
  //                       <div className="like-button">
  //                         <div className="like-button-liked">
  //                           <span>♥</span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="show-like-count">{post.likers.length}</div>
  //                 </div>
  //                 <div className="show-comment-container">
  //                   <form className="show-comment-form">
  //                     <textarea
  //                       className="show-textarea"
  //                       placeholder="Add a Comment:"
  //                     ></textarea>
  //                     <button className="submit-comment-button">Post</button>
  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }
}
export default withRouter(PostShow);
