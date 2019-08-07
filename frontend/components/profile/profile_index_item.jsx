import React from 'react';
import { withRouter } from 'react-router';
class ProfileIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div class="image-container">
                <a href="#/posts/1">
                    <img class="user-page-photos" src=""></img>
                    <div class="image-overlay">
                        <p class="image-overlay-text">
                            <span class="overlay-heart">♥</span>
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}

export default withRouter(ProfileIndexItem);
