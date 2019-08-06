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
            <li className="feed-image-box">
                <div className="feed-image-header">
                    <div className="feed-image-header-wrap">
                        <a href="#/users/30">
                            <img className="feed-profile-pic" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/carozzi.jpg" />
                        </a>
                        <a className="profile-link" href="#/users/30">dangatangg demo</a>
                    </div>
                    <PostIndexItem
                        title={post.title}
                        location={post.location}
                        photo_url={post.photo_url}
                        key={post.id}
                    />
                </div>
            </li>

        ))
        return (
            <div>
                <div className="page">
                    <header className="headerBar"></header>
                    <div>
                        <section className="nav-bar-container">
                            <div className="nav-left">
                                <div className="nav-left-index">
                                    <a className="nav-icon" href="#/posts">
                                        <i className="make-post-icon">
                                            {/* <img src="/Users/michaelscheer/Desktop/FULLSTACK_PROJECT/app/assets/images/lightmeter.png" /> */}
                                        </i>
                                    </a>
                                    <div className="nav-link-logo">Fotobox</div>
                                    <div className="nav-middle">
                                        <input className="user-search" type="text" placeholder="Search Other Box Lovers" />
                                        <div className="nav-right">
                                            <div className="nav-right-index">
                                                <a className="nav-icon" href="#/posts">
                                                    <i className="fotobox-icon"></i>
                                                </a>
                                            </div>
                                            <div className="nav-profile">
                                                <div className="nav-icon">
                                                    <img src="/Users/michaelscheer/Desktop/FULLSTACK_PROJECT/app/assets/images/lightmeter.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="feed-container">
                            <div className="feed-left"></div>
                            <div className="feed-mid">
                                <ul className="feed-images">
                                    {posts}
                                </ul>
                            </div>
                            <div className="feed-right"></div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
}


export default withRouter(PostIndex);