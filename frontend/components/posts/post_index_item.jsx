import React from 'react';
import { withRouter } from 'react-router';
class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <li className="feed-image-box">
                <div className="feed-image-header">
                    <div className="feed-image-header-wrap">
                        <a href="#/users/3">
                            <img className="feed-profile-pic" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/carozzi.jpg" />
                        </a>
                        <a className="profile-link" href='#/users/3'>dangatangg demo</a>
                    </div>
                    <div>
                        <img className="feed-image" src={this.props.photo_url} />
                        <span>{this.props.title}</span>
                    </div>
                </div>
            </li>

        )
    }
}

export default withRouter(PostIndexItem);
