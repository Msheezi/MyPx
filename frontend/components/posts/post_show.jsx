import React from "react";
import { withRouter } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    // this.props.fetchComments(this.props.match.params.postId)
  }

  render() {
    return (
      <div className="post-show-container">
        <img src={this.props.post.photoUrl} className="post-show-img" />
        <h3 className="post-show-title">{this.props.post.title}</h3>
        <h2 className="post-show-author">by Author</h2>
        <p className="post-create-time">post time</p>
        <p className="post-category">category</p>
      </div>
    );
  }
}

export default withRouter(PostShow);
