import React, { Component } from "react";
import Searchbar from "./components/Searchbar";

import "./App.scss";
import ImageGallery from "./components/ImageGallery/ImageGallery";
class App extends Component {
  state = {
    myImage: "",
  };
  handleFormSubmit = (myImage) => {
    this.setState({ myImage });
    console.log(myImage + " handleFormSubmit App");
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery myImage={this.state.myImage} />
      </div>
    );
  }
}

export default App;
