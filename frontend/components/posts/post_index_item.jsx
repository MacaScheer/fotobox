import React from 'react';
import { withRouter } from 'react-router';
class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <img className="feed-image" src={this.props.photo_url} />
                <span>{this.props.title}</span>
            </li>
        )
    }
}

export default withRouter(PostIndexItem);