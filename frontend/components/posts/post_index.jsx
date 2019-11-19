import React from "react";
// import PostIndexItem from "./post_index_item";
import PostIndexItemContainer from "./post_index_item_container";
// import Spinner from "../loading/Spinner";
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
                  <div key={i}>
                    <PostIndexItemContainer key={post.id} post={post} />
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
