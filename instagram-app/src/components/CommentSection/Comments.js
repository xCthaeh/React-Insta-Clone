/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import Comment from "./Comment";
import moment from "moment";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const comments_container = css`
  width: 640px;
  margin: 0 auto;
  font-size: 1rem;
`;

const comment_input_container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 619px;
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;
  background: #fafafa;
  border-right: 0.5px solid #d3d3d3;
`;
const comment_input = css`
  background: none;
  padding: 0 auto;
  margin: 0;
  border: none;
  color: black;
`;
const time = css`
  padding-left: 10px;
  color: grey;
  font-size: 1rem;
`;
const img = css`
  height: 24px;
  width: 24px;
`;

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }
  ///////
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };
  
  commentHandleChange = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.comment,
      username: localStorage.getItem("user")
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  render() {
    const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a");
    const newTime = time.fromNow().toUpperCase();
    return (
      <div ccs={comments_container}>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <p css={time}>{newTime}</p>
        <div css={comment_input_container}>
          <form onSubmit={this.addNewComment}>
            <input
              css={comment_input}
              type="text"
              onChange={this.commentHandleChange}
              value={this.state.comment}
              placeholder="Add a comment..."
            />
          </form>
          <img css={img} alt="more" src="./../img/more.png" />
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default Comments;
