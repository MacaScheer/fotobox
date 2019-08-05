import React from 'react';
import { withRouter } from 'react-router';
class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <span>{this.props.title}</span>
                <img className="feed-image" src={this.props.photo_url} />
            </li>
        )
    }
}

export default withRouter(PostIndexItem);