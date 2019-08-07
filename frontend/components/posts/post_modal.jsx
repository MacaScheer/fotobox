import React from 'react';
import PostIndexItem from './post_index_item';
import { withRouter } from 'react-router';

class PostModal extends React.Component {
    constructor(props) {
        super(props)
        state = { show: false };
    };
    componentDidMount() {
        this.props.fetchPost();
    }
    showModal = () => {
        this.setState({ show: true });
    }
    hideModal = () => {
        this.setState({ show: false})
    }

    render() {
        if (!this.props.post) {
            return <span>No post(yet)!</span>
        }

        return (

        )

    }
}
export default withRouter(PostModal);