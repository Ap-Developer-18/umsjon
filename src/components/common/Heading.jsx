import React from "react";

const Heading = ({
  firstText,
  colorText,
  lastText,
  cutomClass,
  textStart,
  lineCustomCss,
}) => {
  return (
    <div>
      <h2
        className={` font-bold text-4xl md:text-5xl text-center !leading-121 ${
          textStart ? "text-start" : "text-center"
        } ${cutomClass}`}
      >
        {firstText}&nbsp;
        <span
          className={`text-purple-blue text-nowrap relative z-10 after:-z-10 after:absolute after:left-0  after:bg-rainbow-gradient after:h-[3px] after:w-full after:rounded-42 ${lineCustomCss}`}
        >
          {colorText}
        </span>
        &nbsp;
        {lastText}
      </h2>
    </div>
  );
};

export default Heading;
