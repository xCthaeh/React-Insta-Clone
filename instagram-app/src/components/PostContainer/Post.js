/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/Comments";
import { jsx, css } from "@emotion/core";

const user_post = css`
  border: 1px solid #d3d3d3;
`;
const userInfo = css`
  display: flex;
  align-items: center;
  padding: 10px 15px 0px;
  margin-bottom: 15px;
`;
const user_icon = css`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const post_image = css`
  width: 638px;
`;

const interaction_container = css`
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
`;
const interaction_containerP = css`
  font-size: 1.1rem;
  line-height: 0;
  padding-left: 10px;
`;
const user_interaction = css`
  padding-right: 20px;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.data.likes
    };
  }

  addLike = () => {
    if (!this.state.liked) {
      this.setState({
        likes: this.state.likes + 1,
        liked: !this.state.liked
      });
    } else if (this.state.liked) {
      this.setState({
        likes: this.state.likes - 1,
        liked: !this.state.liked
      });
    }
  };

  render() {
    const user = this.props.data;
    return (
      <div css={user_post}>
        <div css={userInfo}>
          <img css={user_icon} alt="user_icon" src={user.thumbnailUrl} />
          <div>
            <h2> {user.username} </h2>
          </div>
        </div>
        <div>
          <img css={post_image} alt="user_post" src={user.imageUrl} />
        </div>
        <div css={interaction_container}>
          <img
            onClick={this.addLike}
            css={user_interaction}
            alt="likes"
            src="./../img/heart.png"
          />
          <img
            css={user_interaction}
            alt="comment"
            src="./../img/message.png"
          />
        </div>
        <div className="interaction_container">
          <p css={interaction_containerP}>
            <strong>{this.state.likes}</strong> likes{" "}
          </p>
        </div>
        <Comments comments={user.comments} time={user.timestamp} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
