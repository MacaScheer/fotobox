import React from 'react';
import PostIndexItem from './post_index_item';
import { withRouter } from 'react-router';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        let posts = this.props.posts;
        // debugger
        posts = posts.map((post) => (
            <PostIndexItem
                title={post.title}
                location={post.location}
                photo_url={post.photo_url}
                key={post.id}
            />
        ))
        return (
            <div>
                <h3> Post Feed: </h3>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}

export default withRouter(PostIndex);