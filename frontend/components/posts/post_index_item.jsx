import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <li className="feed-image-box">
        <div className="feed-image-header">
          <div className="feed-image-header-wrap">
            {/* <Link to={`/users/${post.user_id}`}> */}
            <img
              className="feed-profile-pic"
              src={this.props.authorPhotoUrl}
            />
            {/* </Link> */}
            <Link className="profile-link" to={`/users/${this.props.user_id}`}>
              {this.props.author}
            </Link>
          </div>
          <div>
            <Link to={`/posts/${this.props.id}`}>
              <img className="feed-image" src={this.props.photo_url} />
            </Link>
            <span>{this.props.title}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(PostIndexItem);
