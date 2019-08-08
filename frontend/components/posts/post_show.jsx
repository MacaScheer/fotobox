import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props)
        // this.deletePost = this.deletePost.bind(this)
    };
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePost();
    }

    render() {
        // if (!this.props.post) {
        //     return <span>No post(yet)!</span>
        // }
        let post = this.props.post;

        return (
            <div className="post-show-container">
                <div className="post-show-page">
                    <div className="post-show-container">
                        <div className="post-box">
                            {/* <img className="post-show-image" src="" /> */}
                            <div className="post-show-image">{post}</div>
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