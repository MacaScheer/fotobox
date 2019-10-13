import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost();
  }

  render() {
    if (!this.props.post) {
      return <span>Loading</span>;
    }
    let { post } = this.props;

    return (
      <div className="post-show-wrapper">
        <section className="post-show-page">
          <div className="post-show-container">
            <div className="post-box">
              <div className="post-show-image">
                <img className="post-show-image" src={post.photo_url} />
              </div>
              <div className="post-show-detail-box">
                <div className="post-author">
                  <div className="post-author-links">
                    <Link
                      className="author-link"
                      to={`/users/${this.props.user_id}`}
                    ></Link>
                    <button
                      className="post-author-delete"
                      onClick={this.handleDelete}
                    >
                      Delete Post
                    </button>
                  </div>
                </div>
                <div className="post-show-comments"></div>
                <div className="post-show-likes">
                  <div className="likes-div">
                    <div className="show-buttons">
                      <div className="like-button-div">
                        <div className="like-button">
                          <div className="like-button-liked">
                            <span>♥</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="show-like-count">{post.likers}</div>
                  </div>
                  <div className="show-comment-container">
                    <form className="show-comment-form">
                      <textarea
                        className="show-textarea"
                        placeholder="Add a Comment:"
                      ></textarea>
                      <button className="submit-comment-button">Post</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(PostShow);
