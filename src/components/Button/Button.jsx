import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <>
      <button type="button" className="Button" onClick={props.onClick}>
        Load more
      </button>
    </>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
