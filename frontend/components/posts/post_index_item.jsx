import React from 'react';
import { withRouter } from 'react-router';
class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        debugger
        return (<li>
            {this.props.title},
            {/* {this.props.location}, */}
            <img src={this.props.photo_url} />
            {/* {this.props.photo_url} */}
        </li>
        )
    }
}

export default withRouter(PostIndexItem);