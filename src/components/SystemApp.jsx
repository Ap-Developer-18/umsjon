import React from "react";

import Heading from "./common/Heading";
import line from "../assets/images/webp/line-border.webp";
import { SYSTEM_APP_LIST } from "../utils/helper";

const SystemApp = () => {
  return (
    <div className="lg:pt-[115px] relative z-10 pt-20 md:pt-24">
      <div className="container xl:max-w-[1140px] xl:px-0">
        <Heading
          firstText="All In One"
          lineCustomCss="after:-bottom-3"
          colorText="System/App"
        />
        <div className="flex items-center lg:justify-center !gap-y-[30px] md:!gap-y-10 sm:gap-x-[30px] gap-x-6 md:gap-x-[68px] lg:gap-x-[65px] sm:mt-[82px] mt-14 flex-wrap">
          {SYSTEM_APP_LIST.map((obj, i) => (
            <>
              <a
                href="#"
                key={i}
                className="flex group lg:w-[unset] w-[42%] md:w-2/12 max-md:mx-auto flex-col h-full items-center"
              >
                <div>
                  <div className="min-w-[90px] min-h-[100px] flex justify-center items-center">
                    <img
                      loading="lazy"
                      height={100}
                      width={100}
                      src={obj.image}
                      className={`w-full group-hover:scale-95 duration-300  object-contain max-w-[100px] ${
                        i === 4
                          ? "!max-w-[196px]"
                          : i === 6
                          ? "!max-w-[116px]"
                          : i === 7
                          ? "!max-w-[179px]"
                          : i === 8 && "!max-w-[192px]"
                      }`}
                      alt="TimelineImg"
                    />
                  </div>
                </div>
                <p className="text-black group-hover:text-purple-blue duration-300 text-xl text-center md:text-2xl !leading-121 font-medium mt-[22px]">
                  {obj.text}
                </p>
              </a>
              <div
                className={`w-[1px] h-[130px] pointer-events-none ${
                  i === 1
                    ? "md:block hidden"
                    : i === 2
                    ? "lg:block md:hidden"
                    : i === 3
                    ? "xl:block hidden md:block lg:hidden"
                    : i === 4
                    ? " xl:hidden"
                    : i === 5
                    ? "lg:block hidden"
                    : i === 6
                    ? ""
                    : i === 7
                    ? "xl:block lg:hidden md:block hidden"
                    : i === 8 && "hidden"
                }`}
              >
                      <img loading="lazy" src={line} alt="line" width={1} height={130} className="h-[130px] w-[1px]" />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemApp;
