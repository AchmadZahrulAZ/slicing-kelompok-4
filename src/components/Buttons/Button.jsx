import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="font-raleway bg-peachred text-white font-medium py-4 px-6 rounded-md" onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;