import React from 'react';
import PostIndexItem from './post_index_item';
import { withRouter } from 'react-router';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        // debugger
        this.props.fetchPosts();
    }
    render() {
        let posts = this.props.posts;
        posts = posts.map((post, i) => (
            <PostIndexItem
                title={post.title}
                location={post.location}
                photo_url={post.photo_url}
                key={i}
            />

        ))
        return (
            <div>
                <section className="feed-container">
                    <div className="feed-left"></div>
                    <div className="feed-mid">
                        <ul className="feed-images">
                            {posts}
                        </ul>
                    </div>
                    <div className="feed-right"></div>
                </section>
            </div >
        )
    }
}


export default withRouter(PostIndex);