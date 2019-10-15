import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SearchBarContainer from "./search_bar_container";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  render() {
    return (
      <div className="page">
        <section className="nav-bar-container">
          <div className="nav-left">
            <Link className="nav-icon" to={"/"}>
              <img
                className="lightmeter"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightmeter.png"
              />
              <div className="nav-link-logo">Fotobox</div>
            </Link>
          </div>
          <SearchBarContainer />
          <div className="nav-right">
            {/* <Link className="nav-icon" to={`/users/${this.currentUser.id}`}> */}
            <Link className="nav-icon" to={`/users/my-profile`}>
              <img
                className="box-icon"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_icon.png"
              />
            </Link>
            <Link className="nav-icon" to={`/newpost`}>
              <img
                className="post-form-icon"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/rolleiflex.jpg"
              />
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(NavBar);
