import React from 'react';
import { withRouter } from 'react-router';
class ProfileIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     this.props.fetchPost(this.props.post.id)
    // }

    render() {
        return (
            <div className="image-container">
                <a href="#/posts/1">
                    <img className="user-page-photos" src={this.props.photo_url}></img>
                    <div className="image-overlay">
                        <p className="image-overlay-text">
                            {/* <span className="overlay-heart">♥</span> */}
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}

export default withRouter(ProfileIndexItem);
