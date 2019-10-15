import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LikeContainer from "../like/like_container";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
      // post_id: ""
    };
    this.handleComment = this.handleComment.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleComment(e) {
    e.preventDefault();
    if (this.state.body !== "") {
      const comment = { body: this.state.body, post_id: this.props.post.id };
      this.props.createComment(comment);
      this.props.fetchPost(this.props.post.id);
      this.setState({ body: "" });
    } else {
      this.props.openErrorModal();
    }
  }

  render() {
    // let { id } = this.props.post;
    let { post } = this.props;

    let commentPosts = Object.values(post.comments).map(comment => {
      return (
        <div key={comment.id} className="post-show-comment">
          <Link className="feed-profile-link" to={`/users/${comment.user_id}`}>
            {comment.author}
          </Link>
          <span className="comment-bo">&nbsp;{comment.body}</span>
        </div>
      );
    });
    let limitPosts = [];
    while (limitPosts.length < 3) {
      limitPosts.push(commentPosts.shift());
    }

    return (
      <li className="feed-image-box">
        <div className="feed-image-header">
          <div className="feed-image-header-wrap">
            <img className="feed-profile-pic" src={post.authorPhotoUrl} />
            <Link className="profile-link" to={`/users/${post.user_id}`}>
              {post.author}
            </Link>
          </div>
          <div onClick={() => this.props.openModal({ postId: post.id })}>
            <img className="feed-image" src={post.photoUrl} />
            <span>{post.title}</span>
          </div>
          <div className="feed-image-bottom">
            <div className="feed-image-bottom-buttons">
              <i
                className="fas fa-heart show-icon"
                onClick={this.handleComment}
              ></i>
            </div>
            <div className="feed-image-bottom-likes">
              <LikeContainer post={post} likers={post.likers} />
              {post.likers.length === 1
                ? `1 like`
                : `${post.likers.length} likes`}
            </div>
            <div className="feed-image-bottom-likes">
              {commentPosts === 1
                ? `1 comment`
                : `${commentPosts.length} comments`}
            </div>
            <div className="feed-image-bottom-bio"></div>
            <div className="feed-image-bottom-comments">{limitPosts}</div>
            <div className="feed-image-comment-input">
              <form className="feed-comment-form">
                <textarea
                  className="feed-textarea"
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
      </li>
    );
  }
}

export default withRouter(PostIndexItem);
