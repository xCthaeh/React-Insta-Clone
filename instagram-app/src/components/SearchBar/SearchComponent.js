/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import img from './search.png';

const search_component_container = css`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 0.5px solid #d3d3d3;
`;

const search_component_instagram_logo = css`
  display: flex;
  justify-content: flex-start;
`;
const instagram_icon = css`
  margin-right: 25px;
  height: 36px;
  width: 36px;
  margin-right: 20px;
`;

const vertical_line = css`
  border-left: 2.5px solid black;
  height: 35px;
`;
const ig_logo = css`
  height: 40px;
  margin-left: 20px;
`;

const search_input = css`
  color: black;
  font-size: 1.1rem;
  text-align: center;
  height: 15px;
  width: 250px;
  padding: 10px;
  background-color: #fafafa;
  background-image: url(${img});
  background-position: 7px center;
  background-repeat: no-repeat;
`;
const icons = css`
  height: 34px;
  width: 34px;
  margin-right: 20px;
`;

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  render() {
    return (
      <div css={search_component_container}>
        <div css={search_component_instagram_logo}>
          <img
            css={instagram_icon}
            alt="instagram icon"
            src="./../img/instagram-logo.png"
          />
          <div css={vertical_line} />
          <img
            css={ig_logo}
            alt="instagram logo"
            src="./../img/instagram.png"
          />
        </div>
        <div className="input">
          <input
            css={search_input}
            type="text"
            placeholder="Search"
            onChange={this.props.searchPostHandler}
          />
        </div>
        <div className="search-component-navigation">
          <img css={icons} alt="browse" src="./../img/compass.png" />
          <img css={icons} alt="likes" src="./../img/heart.png" />
          <img css={icons} alt="profile" src="./../img/profile.png" />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
