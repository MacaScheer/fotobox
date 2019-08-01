import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }
    componentDidMount() {
        // this.props.fetchPosts();
    }
    render() {
        // debugger
        let posts = Object.values(this.props.state.entities.posts)

        return (
            <div>
                <h3> Post Feed: </h3>
                <ul>
                    {posts.map((post, i) => (
                        <PostIndexItem
                            title={title}
                            location={location}
                            img_url={img_url}
                            id={post.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default PostIndex;