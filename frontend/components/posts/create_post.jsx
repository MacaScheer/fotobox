import React from 'react';
import { withRouter } from 'react-router';
class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            title: this.props.title,
            photo: this.props.photo,
            location: this.props.location,
            photoFile: false
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

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
        formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {

            formData.append('post[photo]', this.state.photoFile);
            formData.append('post[title]', this.state.title);
            formData.append('post[location]', this.state.location);
        }
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    handleUpdate([field]) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    // errors() {
    //     if (this.props.errors.responseJSON) {
    //         return (<ul>
    //             {this.props.errors.responseJSON.map((error, i) => (<li key={i}>{error}</li>))}
    //         </ul>)
    //     }
    // }
    // componentDidMount() {
    //     this.props.clearErrors();
    // }

    render() {
        return (
            <form className="new-post-form" onSubmit={this.handleSubmit}>
                <div className="upload-form-div">
                    <div className="preview-div">
                        <div className="preview-outline">
                            <img className="scanner-icon" src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightbox_favicon.svg" />
                        </div>
                    </div>
                </div>
                <div className="post-form-right">
                    {/* <ul className="login-errors">{this.errors()}</ul> */}
                    <div className="post-right-top">
                        {/* <h2 className="post-form-user">{this.props.currentUser.username}</h2> */}
                    </div>
                    <div className="post-right-mid">
                        <label className="upload-photo">
                            <div>
                                <input className="photo-input-field" id="file-selector" type="file" onChange={this.handleFile} />
                            </div>
                        </label>
                        <label className="upload-content">
                            <textarea className="title-input-field" onChange={this.handleUpdate('title')} type="text" placeholder="Give your post a title or caption" value={this.state.title}>
                            </textarea>
                        </label>
                        <label>Location
                                <input className="location-input-field" onChange={this.handleUpdate('location')} type="text" value={this.state.location} />
                        </label>
                    </div>
                    <div className="post-right-bottom">
                        <div className="post-form-buttons">
                            <button className="post-button-cancel">Cancel</button>
                            <input className="post-button-upload" type="submit" value="Upload Post" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(CreatePost);
