import React, { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log("componentDidUpdate");
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("Click escap");
      this.props.onClose();
    }
  };
  handleBlackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBlackDropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
