import React from "react";

const ButtonSmall = ({ text, onClick }) => {
  return (
    <button href="" className="font-raleway bg-peachred text-white font-medium py-2 px-4 rounded-md" onClick={onClick}>
        {text}
    </button>
  );
};

export default ButtonSmall;