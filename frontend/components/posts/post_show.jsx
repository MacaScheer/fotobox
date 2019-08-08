import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        // this.deletePost = this.deletePost.bind(this)
    };
    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.match.params.postId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePost();
    }

    render() {
        if (!this.props.post) {
            return <span>Loading</span>
        }
        let { post } = this.props;

        return (
            <div className="post-show-container">
                <div className="post-show-page">
                    <div className="post-show-container">
                        <div className="post-box">
                            <div className="post-show-image">
                                <img src={post.photo_url} />
                            </div>
                            <div className="post-show-detail-box">
                                <div className="post-author">
                                    <div className="post-author-links">
                                        <Link className="author-link" to={`/users/${this.props.user_id}`}>

                                        </Link>
                                        <button className="post-author-delete" onClick={this.handleDelete}>Delete Post</button>

                                    </div>
                                </div>
                                <div className="post-comments"></div>
                                <div className="post-likes"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(PostShow);