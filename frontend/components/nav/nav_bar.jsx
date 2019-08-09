import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
    };

    render() {
        return (
            <div className="page">
                <section className="nav-bar-container">
                    <div className="nav-left">
                        <a className="nav-icon" href="#/">
                            <img className="lightmeter" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightmeter.png" />
                            <div className="nav-link-logo">Fotobox</div>
                        </a>
                    </div>

                    <div className="nav-mid">
                        <input className="user-search" type="text" placeholder="Search Other Boxes" />
                    </div>

                    <div className="nav-right">
                        <Link className="nav-icon" to={`/users/${this.currentUser.id}`}>
                            <img className="box-icon" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_icon.png" />
                        </Link>
                        <Link className="nav-icon" to={`/newpost/${this.currentUser.id}`}>
                            <img className="post-form-icon" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/rolleiflex.jpg" />
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}


export default withRouter(NavBar);