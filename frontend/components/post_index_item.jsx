import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li key={this.props.id}>{this.props.title}, {this.props.location}</li>
    }
}

export default PostIndexItem;