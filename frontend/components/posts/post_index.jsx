import React from "react";
// import PostIndexItem from "./post_index_item";
import PostIndexItemContainer from "./post_index_item_container";

import { withRouter } from "react-router";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.closeModal();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <section className="feed-container">
          <div className="feed-left"></div>
          <div className="feed-mid">
            <ul className="feed-images">
              {posts.reverse().map((post, i) => {
                return (
                  <div>
                    <PostIndexItemContainer key={post.id} post={post} />
                    {/* <PostIndexItem
                      title={post.title}
                      id={post.id}
                      location={post.location}
                      photo_url={post.photoUrl}
                      key={i}
                      user_id={post.user_id}
                      currentUser={this.props.currentUser}
                      authorPhotoUrl={post.authorPhotoUrl}
                      author={post.author}
                    /> */}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="feed-right"></div>
        </section>
      </div>
    );
  }
}

export default withRouter(PostIndex);
