import React from "react";
import Search from "./search";
import "./header.css";
import { HandleSearchDataFunction } from "../../types/Functions";

export default class Header extends React.Component<{onSearch: HandleSearchDataFunction}> {
  render() {
    return (
      <>
        <Search onSearch={this.props.onSearch}></Search>
      </>
    )
  }
}
