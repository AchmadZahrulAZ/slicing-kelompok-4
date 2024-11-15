import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text, onClick }) => {
  return (
    <button type={type} className="font-raleway bg-peachred text-white font-medium py-3 px-6 rounded-md mt-4" onClick={onClick}>
        {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;