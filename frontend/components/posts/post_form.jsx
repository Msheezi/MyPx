import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category_id: "",
      author_id: this.props.currentUser,
      camera_name: ""
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[category_id]", this.state.category_id);
    formData.append("post[author_id]", this.state.author_id);
    formData.append("post[camera_name]", this.state.camera_name);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }
    this.props.submitPost(formData).then(
      () => {
        this.props.handleClose();
        this.props.clearErrors();
        this.setState({
          title: "",
          category_id: "",
          author_id: this.props.currentUser,
          camera_name: "",
          photoFile: undefined,
          photoUrl: ""
        });
      },
      () => this.renderErrors()
    );
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img className="img-preview" src={this.state.photoUrl} />
    ) : null;
    return (
      <div className="form-container">
        <form className="form-itself">
          <label htmlFor="title">
            Post Title
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleInput("title")}
            />
          </label>

          {/* <label>Category
                        <input type="number"
                        // id="post-body"
                        value={this.state.category_id}
                        onChange={this.handleInput('category_id')} />
                    </label> */}
          {/* <label>Camera
                        <input type="text"
                        value={this.state.camera_name}
                        onChange={this.handleInput('camera_name')} />
                    </label> */}
          <label>
            <input type="file" onChange={this.handleFile} />
          </label>
          {this.renderErrors()}
          <br />
          <button className="comment-submit-btn" onClick={this.handleSubmit}>
            {" "}
            Submit
          </button>
        </form>
        <div className="modal-image-preview">
          <h3>Image preview </h3>
          {preview}
        </div>
      </div>
    );
  }
}
