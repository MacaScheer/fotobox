import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <li className="feed-image-box">
                <div className="feed-image-header">
                    <div className="feed-image-header-wrap">
                        {/* <Link to={`/users/${post.user_id}`}> */}
                            <img className="feed-profile-pic" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/carozzi.jpg" />
                        {/* </Link> */}
                        <a className="profile-link" href={`/users/${this.props.user_id}`}>dangatangg demo</a>
                    </div>
                    <div>
                        {/* <Link to={`/posts/${post.id}`}> */}
                        <img className="feed-image" src={this.props.photo_url} />
                        <span>{this.props.title}</span>
                        {/* </Link> */}
                    </div>
                </div>
            </li >

        )
    }
}

export default withRouter(PostIndexItem);
