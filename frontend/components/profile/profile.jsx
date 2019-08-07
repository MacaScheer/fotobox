import React from 'react';
import { withRouter } from 'react-router';
import ProfileIndexItem from './profile_index_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userPosts = this.props.userPosts
        // this.handleClick = this.handleClick.bind(this)
    }
    //how do we have the specific user' slice of state??
    //fetch only the user's posts
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUser(this.props.match.params.userId)
    }
    render() {
        let userPosts = this.userPosts.map((post, i) => (
            <li>
                <ProfileIndexItem
                    title={post.title}
                    location={post.location}
                    photo_url={post.photo_url}
                    key={i}
                />
            </li>
        ))

        return (
            <div className="profile-wrap">
                <div className="profile-left"></div>
                <div className="profile-container">
                    <div className="profile-top">
                        <div className="profile-display-pic">
                            {/* <img src=""/> */}
                        </div>
                        <div className="profile-top-right">
                            <div className="profile-top-up">
                                <h1 className="username-header">{this.props.username}</h1>
                                <div className="profile-top-buttons">
                                    <button className="profile-button">Log Out</button>
                                    <button className="profile-button">Edit Profile</button>
                                    <button className="profile-button">Add Photo</button>
                                </div>
                            </div>
                            <div className="profile-top-down">
                                <span className="num-posts">{this.num_posts}posts</span>
                                <span className="num-followers">{this.num_followers}followers</span>
                                <span className="num-following">{this.num_following}following</span>
                            </div>

                        </div>
                    </div>
                    <div className="profile-photo-index-container">
                        <ul className="profile-photo-index">{userPosts}</ul>
                    </div>
                </div>
                <div className="profile-right"></div>
            </div>

        )
    }
}
export default withRouter(Profile);