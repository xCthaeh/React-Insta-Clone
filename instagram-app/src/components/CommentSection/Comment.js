/* eslint-disable no-unused-vars */
/**@jscx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import { jsx, css } from "@emotion/core";

const commentp = css`
font-size: 1rem;
`;

const commentspan = css`
font-weight: bold;
padding-left: 10px;
`;

const Comment = props => {
  return (
    <div className="comment_container">
      <p css={commentp}><span css={commentspan}>{props.comment.username}</span>     {props.comment.text}</p>
    </div>
  )
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
}

export default Comment;
