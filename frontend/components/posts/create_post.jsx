import React from 'react';
import { withRouter } from 'react-router';
class CreatePost extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="photo-input-field" id="file-selector" type="file" onChange={this.handleFile} />
                <input onChange={this.handleUpdate("title")} type="text" value={this.state.title} />
                <input onChange={this.handleUpdate("location")} type="text" value={this.state.location} />
            </form>

            // <div className="new-post-container">
            //     <div className="new-post-form">
            //         <h3 className="new-post-title">Create A Post</h3>

            //         <form onSubmit={this.handleSubmit}>
            //             <label className="post-field">Description</label>
            //             <input
            //                 type="text"
            //                 value={description}
            //                 onChange={this.update('description')}
            //                 className="post-field"
            //             />

            //             <label className="post-field">Title</label>
            //             <input
            //                 value={title}
            //                 onChange={this.update('title')}
            //                 className="post-field"
            //             />

            //             <label className="post-field">Location</label>
            //             <input
            //                 type="text"
            //                 disabled
            //                 value={location}
            //                 className="post-field"
            //             />

            //             <div className="button-holder">
            //                 <h3>Image preview </h3>
            //                 {preview}
            //                 <h3 className="button-holder">Add a Picture</h3>
            //                 <input type="file" className="new-post-button"
            //                     onChange={this.handleFile.bind(this)} />
            //             </div>
            //             <hr />
            //             <div className="button-holder">
            //                 <input
            //                     type="submit"
            //                     value="Create Post"
            //                     className="new-post-button"
            //                 />
            //             </div>
            //         </form>
            //     </div>
            // </div>
        )
    }
}

export default withRouter(CreatePost);
