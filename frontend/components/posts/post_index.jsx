import React from "react";
import PostIndexItem from "./post_index_item";
import Spinner from "../loading/Spinner";
import { withRouter } from "react-router";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.getPosts = this.getPosts.bind(this);
    this.scroller = this.scroller.bind(this)
  }
  getPosts() {
    this.props.fetchPosts(this.state.page).then(() => this.incrementStart())
  }

  incrementStart() {
    let num = this.state.page + 4
    this.setState({ page: num})
  }
  componentDidMount() {
    this.getPosts();
    this.props.fetchTotalPosts()
    document.addEventListener('scroll', this.scroller)
    this.props.closeModal();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scroller)
  }

  scroller() {
    debugger
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.state.page < this.props.numTotal) { 
        this.getPosts();
      }
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
            </ul>
          </div>
          <div className="feed-right"></div>
        </section>
      </div>
    );
  }
}

export default withRouter(PostIndex);
