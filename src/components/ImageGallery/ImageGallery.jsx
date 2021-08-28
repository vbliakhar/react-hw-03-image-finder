import React, { Component } from "react";

const myKey = "22042086-a7502aa63bbf9b5978b2310";
class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myImage !== this.props.myImage) {
      console.log("Other");

      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.props.myImage}&page=1&key=${myKey}de&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((image) => {
          this.setState({ image });
          console.log(image.hits[0].userImageURL);
        })
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { image, loading, error } = this.state;
    return (
      <div>
        {error && (
          <h1 style={{ color: "red" }}>this " sads " image does not exist</h1>
        )}
        {loading && <h1>loading ..</h1>}
        {!this.props.myImage && <h1>Enter a name for the image search</h1>}
        <ul className="ImageGallery">
          {image && (
            <img src={" "} alt="Girl in a jacket" width="500" height="600" />
          )}
        </ul>
      </div>
    );
  }
}
export default ImageGallery;
