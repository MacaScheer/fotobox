import React from "react";

class AnimationComponent extends React.Component {
  render() {
    return (
      <div className="login-left-image-container">
        <img
          className="login-left-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/login-form-phones.png"
        />
        {/* <img
          className="login-left-image-inner third-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/profile_image.jpg"
        /> */}
        {/* <img
          className="login-left-image-inner second-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_phone_screen.jpg"
        /> */}
        {/* <img
          className="login-left-image-inner first-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/profile_image.jpg"
        /> */}
        <img
          className="login-left-image-inner fourth-image"
          src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_phone_screen.jpg"
        />
      </div>
    );
  }
}

export default AnimationComponent;
