import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className="Button"
        style={{ textAlign: "center" }}
        onClick={props.onClick}
      >
        Load more
      </button>
    </>
  );
};

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
