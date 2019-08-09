import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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
                <Link to={`/posts/${this.props.id}`}>
                    <img className="user-page-photos" src={this.props.photo_url}></img>
                    <div className="image-overlay">
                        <p className="image-overlay-text">
                            {/* <span className="overlay-heart">♥</span> */}
                        </p>
                    </div>
                </Link>
            </div >
        )
    }
}

export default withRouter(ProfileIndexItem);
