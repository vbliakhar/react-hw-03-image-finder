import React, { Component } from "react";
import Loader from "react-loader-spinner";

import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import "./App.scss";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const myKey = "22042086-a7502aa63bbf9b5978b2310";
class App extends Component {
  state = {
    myImage: "",
    images: [],
    loading: false,
    error: null,
    page: 1,
  };
  handleFormSubmit = (myImage) => {
    this.setState({ myImage });
    // console.log(myImage + " handleFormSubmit App");
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.myImage;
    const nextName = this.state.myImage;
    if (prevName !== nextName) {
      this.setState({ loading: true, images: null });
      this.fetchImages();
    }
  }
  fetchImages = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.myImage}&page=${this.state.page}&key=${myKey}de&image_type=photo&orientation=horizontal&per_page=6`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(` No image  ${this.state.myImage}`));
      })
      .then((images) => {
        // this.setState({
        //   images: [...images.hits, ...this.state.images],
        //   page: this.state.page + 1,
        // });
        this.setState((preState) => ({
          images: [...images.hits],
          page: preState.page + 1,
        }));
        if (!images.hits.length) {
          return Promise.reject(new Error(` No image  ${this.state.myImage}`));
        } else {
          this.setState({ error: null });
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <h1 style={{ color: "red" }}>{error.message}</h1>}

        {loading && (
          <Loader
            type="Circles"
            color="red"
            height={80}
            width={80}
            style={{ textAlign: "center" }}
          />
        )}
        {!this.state.myImage && <h1>Enter a name for the image search</h1>}
        {images && <ImageGallery images={images} />}
        {images && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default App;
