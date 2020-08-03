import React from "react";
import PostIndexItem from "./post_index_item";
import Spinner from "../loading/Spinner";
// import { Waypoint } from "react-waypoint";
import { withRouter } from "react-router";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.getPosts = this.getPosts.bind(this);
    this.scroller = this.scroller.bind(this);
  }
  getPosts() {
    // TO BE OPTIMIZED BY CONSTANT SIZE BATCH FETCHING

    this.props.fetchPosts(this.state.page);
    this.setState = { page: (this.state.page += 1) };
  }
  componentDidMount() {
    this.getPosts();
     document.addEventListener('scroll', this.scroller)
    this.props.closeModal();
  }
    componentWillUnmount() {
    document.removeEventListener('scroll', this.scroller)
  }

    scroller() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getPosts()
    }
    }

  render() {
    if (!this.props.posts) {
      return <div className="page">
        <Spinner />
      </div>
    }
    const { posts } = this.props;
    return (
      <div className="page">

        <section className="feed-container">
          <div className="feed-left"></div>
          <div className="feed-mid">
            <ul className="feed-images">
              {posts.map((post, i) => {
                return (
                  // <div key={i}>
                    <PostIndexItem
                      key={post.id}
                      post={post}
                      openModal={this.props.openModal}
                      createComment={this.props.createComment}
                      deleteComment={this.props.deleteComment}
                    fetchPost={this.props.fetchPost}
                    fetchPostComments={this.props.fetchPostComments}
                    />
                  // </div>
                );
              })}
              {/* <Waypoint onEnter={this.getPosts} /> */}
            </ul>
          </div>
          <div className="feed-right"></div>
        </section>
      </div>
    );
  }
}

export default withRouter(PostIndex);
