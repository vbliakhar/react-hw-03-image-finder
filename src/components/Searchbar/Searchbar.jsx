import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    myImage: "",
  };
  handleNameChange = (e) => {
    this.setState({ myImage: e.currentTarget.value.toLowerCase() });
  };
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.myImage + " handlerSubmit Searchbar");
    if (this.state.myImage.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.myImage);
    this.setState({ myImage: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handlerSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="bar"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.myImage}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
