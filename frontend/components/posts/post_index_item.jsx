import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<li key={this.props.id}>
            {this.props.title},
            {this.props.location},
            <img src={this.props.img_url} />
        </li>
        )
    }
}

export default PostIndexItem;