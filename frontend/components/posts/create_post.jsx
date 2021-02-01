import React from "react";
import { withRouter } from "react-router";
import ProgressBar from "./progress_bar";

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
        "https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightbox_favicon.svg",
      percentComplete:0
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
    // $.ajax({
  //      xhr: function() {
  //           var xhr = $.ajaxSettings.xhr();
  //           xhr.onprogress = function e() {
  //               // For downloads
  //               if (e.lengthComputable) {
  //                   console.log((e.loaded / e.total *100)+"%");
  //               }
  //           };
  //           xhr.upload.onprogress = function (e) {
  //               // For uploads
  //               if (e.lengthComputable) {
  //                   console.log((e.loaded / e.total *100)+"%");
  //               }
  //           };
  //           return xhr;
  //         },
  //     url: "/api/posts",
  //     method: "POST",
  //     data: formData,
  //     contentType: false,
  //     processData: false,
  //   }).then(() => {
  //     this.props.history.push("/users/my-profile");
  //   })
  // }
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

    // const options = {
    //   onUploadProgress: (progressEvent) => {
    //     const { loaded, total } = progressEvent;
    //     let percent = Math.floor((loaded * 100) / total)
    //     console.log(`${loaded}kb of ${total}kb | ${percent}`)
    //   }
    // }
    // 
// $.ajax({
//     async: true,
//     contentType: file.type,
//     data: file,
//     dataType: 'xml',
//     processData: false,
//     success: function(xml){
//         // Do stuff with the returned xml
//     },
//     type: 'post',
//     url: '/fileuploader/' + file.name,
//     xhr: function(){
//         // get the native XmlHttpRequest object
//         var xhr = $.ajaxSettings.xhr() ;
//         // set the onprogress event handler
//         xhr.upload.onprogress = function(evt){ console.log('progress', evt.loaded/evt.total*100) } ;
//         // set the onload event handler
//         xhr.upload.onload = function(){ console.log('DONE!') } ;
//         // return the customized object
//         return xhr ;
//     }
// });
  //   
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
      <div className="outer-form-div">
        <form className="new-post-form" onSubmit={this.handleSubmit}>
              <div className="preview-outline">
                <img className="scanner-icon" src={this.state.photoUrl} />
              </div>
          <div className="post-mid">
            <div className="post-right-mid">
              <div className="box">
                <input type="file" name="file-5[]" id="file-5" className="inputfile inputfile-4" onChange={this.handleFile} data-multiple-caption="{count} files selected" multiple />
                <label htmlFor="file-5"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span>Choose a file&hellip;</span></label>
              </div>
              
                    {/* <input
                      className="photo-input-field"
                      id="file-selector"
                      type="file"
                      onChange={this.handleFile}
                    /> */}
              {/* <ProgressBar /> */}
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
  </div>
    );
  }
}

export default withRouter(CreatePost);
