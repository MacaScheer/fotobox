import React from 'react';
import PostIndexItem from './post_index_item';
import { withRouter } from 'react-router';

class PostShow extends React.Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        this.props.fetchPost();
    }


    render() {
        // debugger;
        if (!this.props.post) {
            return <span>No post(yet)!</span>
        }

        return <article>
            <h2>{this.props.bleat.author.email} says...</h2>
            <p>{this.props.bleat.body}</p>
        </article>;
    }
}
export default withRouter(PostShow);