import React from "react";
import PropTypes from "prop-types";

const ButtonSmall = ({ type, text, onClick }) => {
  return (
    <button type={type} className="font-raleway bg-peachred text-white font-medium py-2 px-4 rounded-md" onClick={onClick}>
        {text}
    </button>
  );
};

ButtonSmall.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ButtonSmall;