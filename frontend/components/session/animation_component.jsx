import React from "react";

class AnimationComponent extends React.Component {
  render() {
    return (
      <div className="login-left-image-container">
        <img
          className="login-left-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/login-form-phones.png"
        />
        <img
          className="login-left-image-inner"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_phone_screen.jpg"
        />
      </div>
    );
  }
}
