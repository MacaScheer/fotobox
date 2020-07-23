import React from "react";
import { withRouter } from "react-router";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "",
      photo: "",
      location: "",
      photoFile: false,
      photoUrl:
        "https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightbox_favicon.svg"
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
      formData.append("post[title]", this.state.title);
      formData.append("post[location]", this.state.location);
      formData.append("post[user_id]", this.props.currentUser.id);
    }
    $.ajax({
      url: "/api/posts",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      this.props.history.push("/users/my-profile");
    });
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    return (
      <form className="new-post-form" onSubmit={this.handleSubmit}>
        
         
            <div className="preview-outline">
              <img className="scanner-icon" src={this.state.photoUrl} />
            </div>
        <div className="post-mid">
     
          <div className="post-right-mid">
                  <input
                    className="photo-input-field"
                    id="file-selector"
                    type="file"
                    onChange={this.handleFile}
                  />
                <input
                  className="title-input-field"
                  onChange={this.handleUpdate("title")}
                  type="text"
                  placeholder="Add a title"
                  value={this.state.title}
                />
                <input
                  className="location-input-field"
                  onChange={this.handleUpdate("location")}
                  type="text"
                  placeholder="Add a location"
                  value={this.state.location}
                />
            </div>
            <div className="post-form-buttons">
                
                <button
                  className="post-button-cancel"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
                <input
                  className="post-button-upload"
                  type="submit"
                  value="Upload"
                />  
          </div>
          
     </div> 
      </form>
    );
  }
}

export default withRouter(CreatePost);
