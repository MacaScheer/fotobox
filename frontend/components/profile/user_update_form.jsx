import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../../components/nav/nav_bar_container";

class UserUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    let { currentUser } = this.props;
    this.state = {
      bio: currentUser.bio,
      username: currentUser.username,
      email: currentUser.email,
      profilePic: currentUser.photo_url,
      photoFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        profilePic: reader.result,
        photoFile: file
        // photoUrl:reader
      });
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser.username === "demo_user") {
      window.alert(
        "Unable to modify the demo user account. Create an account to user this feature"
      );
    } else {
      const formData = new FormData();
      formData.append("user[id]", this.props.currentUser.id);
      formData.append("user[bio]", this.state.bio);
      formData.append("user[username]", this.state.username);
      formData.append("user[email]", this.state.email);
      if (this.state.photoFile) {
        formData.append("user[profile_picture]", this.state.photoFile);
      }
      this.props.updateUser(formData, this.props.userId).then(() => {
        this.props.history.push(`/users/my-profile`);
      });
    }
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleCancel(e) {
    e.preventDefault();
    let path = `/users/${this.props.currentUser.id}`;
    this.props.history.push(path);
  }
  render() {
    
    let postPreview = (
      <div className="preview-div update-preview">
          <img className="post-pic-preview" src={this.state.profilePic} />
      </div>
    );
    return (
      <div className="post-form-container">
          {/* <div className="scanner-icon-edit"></div> */}
          {postPreview}
          <form className="post-form" onSubmit={this.handleSubmit}>
            <div className="update-form-right">
              <div className="update-right-top">
                <div>{this.props.currentUser.username}</div>
              </div>
              <div className="update-right-mid">
                <div className="update-profile-pic">
                  {/* <label className="upload-photo" htmlFor="file-selector"> */}
                    <div className="update-profile-text">
                    update profile picture:
                    </div>
                      <div className="box">
					              <input type="file" name="file-5[]" id="file-5" className="inputfile inputfile-4" onChange={this.handleFile} data-multiple-caption="{count} files selected" multiple />
				    	          <label htmlFor="file-5"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure></label>
				              </div>
                    {/* <input
                      className="photo-input-field int"
                      id="file-selector"
                      type="file"
                      onChange={this.handleFile}
                    /> */}
                  {/* </label> */}
                </div>
                {/* <label className="update-email"> */}
                  <div className="update-profile-text">update email:</div>
                  <input
                    type="text"
                    className="update-text-input int"
                    // value={this.state.email}
                    placeholder={this.state.email}
                    onChange={this.update("email")}
                  />
                {/* </label> */}
                {/* <label className="update-username"> */}
                  <div className="update-profile-text">update username:</div>
                  <input
                    type="text"
                    className="update-text-input int"
                    placeholder={this.state.username}
                    // placeholder="Write a caption..."
                    onChange={this.update("username")}
                  />
                {/* </label> */}
                {/* <label className="update-bio">  */}
                  <div className="update-profile-text">update bio:</div>
                  <textarea
                    type="text"
                    className="update-bio-text int"
                    // value={this.state.bio}
                    placeholder={this.state.bio}
                    onChange={this.update("bio")}
                  ></textarea>
                {/* </label> */}
              </div>
              {/* <div className="update-right-bottom"> */}
                <div className="post-form-buttons">
                  <button
                    className="post-button-cancel update-cancel"
                    onClick={this.handleCancel}
                  >
                    cancel
                  </button>
                  {/* <input
                                    className="post-button-upload update-submit"
                                    type="submit"
                                    value="Update Profile"
                                /> */}
                  <button
                    className="post-button-upload update-submit"
                    type="submit"
                  >
                    update
                  </button>
                </div>
              </div>
            {/* </div> */}
          </form>
        </div>
    );
  }
  // render() {
  //   let postPreview = (
  //     <div className="preview-div update-preview">
  //       <div className="update-left-top">Profile Picture</div>
  //       <div className="profile-pic-main">
  //         <img className="post-pic-preview" src={this.state.profilePic} />
  //       </div>
  //     </div>
  //   );
  //   return (
  //     <div>
  //       <NavBarContainer />
  //       <div className="post-form-container">
  //         <div className="upload-form-div">{postPreview}</div>
  //         <form className="post-form" onSubmit={this.handleSubmit}>
  //           <div className="update-form-right">
  //             <div className="upload-right-top">
  //               <div>{this.props.currentUser.username}</div>
  //             </div>
  //             <div className="update-right-mid">
  //               <div className="update-profile-pic">
  //                 <label className="upload-photo" htmlFor="file-selector">
  //                   <div className="update-profile-text">
  //                     Update Profile Picture:
  //                   </div>
  //                   <input
  //                     className="photo-input-field int"
  //                     id="file-selector"
  //                     type="file"
  //                     onChange={this.handleFile}
  //                   />
  //                 </label>
  //               </div>
  //               <label className="update-email">
  //                 <div className="update-profile-text">Update Email:</div>
  //                 <input
  //                   type="text"
  //                   className="update-text-input int"
  //                   palceholder={this.state.email}
  //                   onChange={this.update("email")}
  //                 />
  //               </label>
  //               <label className="update-username">
  //                 <div className="update-profile-text">Update Username:</div>
  //                 <input
  //                   type="text"
  //                   className="update-text-input int"
  //                   placeholder={this.state.username}
  //                   onChange={this.update("username")}
  //                 />
  //               </label>
  //               <label className="update-bio">
  //                 <div className="update-profile-text">Update Bio:</div>
  //                 <textarea
  //                   type="text"
  //                   className="update-bio-text int"
  //                   palceholder={this.state.bio}
  //                   onChange={this.update("bio")}
  //                 ></textarea>
  //               </label>
  //             </div>
  //             <div className="update-right-bottom">
  //               <div className="post-form-buttons">
  //                 <button
  //                   className="post-button-cancel update-cancel"
  //                   onClick={this.handleCancel}
  //                 >
  //                   Cancel
  //                 </button>
  //                 <button
  //                   className="post-button-upload update-submit"
  //                   type="submit"
  //                 >
  //                   Update Profile
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
}

export default withRouter(UserUpdateForm);
