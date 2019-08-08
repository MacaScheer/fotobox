import React from 'react';
import { withRouter } from 'react-router';
class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        // const reader = new FileReader();
        // const file = e.currentTarget.files[0];
        // reader.onloadend = () =>
        //     this.setState({ imageUrl: reader.result, imageFile: file });

        // if (file) {
        //     reader.readAsDataURL(file);
        // } else {
        //     this.setState({ imageUrl: "", imageFile: null });
        // }
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {

            formData.append('post[photo]', this.state.photoFile);
        }
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    render() {
        return (
            <div className="new-post-container">
                <div className="new-post-form">
                    <h3 className="new-post-title">Create A Post</h3>

                    <form onSubmit={this.handleSubmit}>
                        <label className="post-field">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={this.update('description')}
                            className="post-field"
                        />

                        <label className="post-field">Title</label>
                        <input
                            value={title}
                            onChange={this.update('title')}
                            className="post-field"
                        />

                        <label className="post-field">Location</label>
                        <input
                            type="text"
                            disabled
                            value={location}
                            className="post-field"
                        />

                        <div className="button-holder">
                            <h3>Image preview </h3>
                            {preview}
                            <h3 className="button-holder">Add a Picture</h3>
                            <input type="file" className="new-post-button"
                                onChange={this.handleFile.bind(this)} />
                        </div>
                        <hr />
                        <div className="button-holder">
                            <input
                                type="submit"
                                value="Create Post"
                                className="new-post-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreatePost);
