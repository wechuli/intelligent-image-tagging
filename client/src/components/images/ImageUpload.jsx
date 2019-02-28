import React, { Component } from "react";
import axios from "axios";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName:'No Image Selected'
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("http://localhost:8090/api/upload", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  }
  onChange(e) {

    this.setState({ file: e.target.files[0],fileName:e.target.files[0].name });
  }

  render() {
    return (
      <div className="file has-name is-boxed">
        <form onSubmit={this.onFormSubmit}>
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="photo"
              onChange={this.onChange}
            />
            <h1 className="subtitle">File Upload</h1>
            <span class="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Choose an Image</span>
            </span>
            <span className="file-name has-text-centered">
            {this.state.fileName}
            </span>

            <button className="button" type="submit">
              Upload
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
