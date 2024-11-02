import React from "react";

const CustomButton = ({ children, customCss, fn }) => {
  return (
    <button
      onClick={fn}
      className={`shadow-low-purple capitalize py-[15px] rounded-42 border border-transparent bg-purple-blue text-white font-bold text-base !leading-121 px-[23px] hover:border-purple-blue hover:bg-transparent hover:text-purple-blue duration-300 ${customCss}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
