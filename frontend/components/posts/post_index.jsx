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
        posts = posts.map((post) => (
            <PostIndexItem
                title={post.title}
                location={post.location}
                photo_url={post.photo_url}
                key={post.id}
            />
        ))
        return (
            // <div>
            //     <div className="page">
            //         <header className="headerBar"></header>
            //         <div>
            //             <section className="nav-bar-container">
            //                 <div className="nav-left">
            //                     <div className="nav-left-index">
            //                         <a className="nav-icon" href="#/posts">
            //                             <i className="make-post-icon">


            //                             </i>
            //                         </a>
            //                         <div className="nav-link-logo">Fotobox</div>
            //                         <div className="nav-middle">
            //                             <input className="user-search" type="text" placeholder="Search Other Box Lovers" />
            //                             <div className="nav-right">
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </section>
            //         </div>
            //     </div>
            // </div>
            <ul>
                {posts}
            </ul>

        )
    }
}


export default withRouter(PostIndex);