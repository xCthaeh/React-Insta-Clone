/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from 'react';
import Post from './Post';
import { jsx, css } from "@emotion/core";

const post_container = css `
  margin-top: 50px;
  width: 640px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const PostContainer = props => {
  return(
    <div css={post_container}>
      {props.data.map((data, index) =>(
        <Post
         key={index}
         data={data} />
      ))}
    </div>
  )
}

export default PostContainer;
