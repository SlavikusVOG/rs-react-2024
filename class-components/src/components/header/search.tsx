import React from "react";

export default class Search extends React.Component {
  keyPressHandler(event) {
    const key = event.key
  }

  buttonClickHandler(event) {
    
  }

  render() {
    // return React.createElement("input", null, "");
    return (
      <>
        <form className="header__form">
          <input
            className="header__search-field"
            type="text"
            name="search-pokemon"
            placeholder="type pokemon attributes"
            onKeyDown={this.keyPressHandler}
          ></input>
          <button className="header__search-button">Search</button>
        </form>
      </>
    )
  }
}
