import React from "react";
import Heading from "./common/Heading";
import RobotImg from "../assets/images/webp/small-robot.webp";
import SavingImage from "../assets/images/webp/saving-image.webp";
import TimeSavingEllipse from "../assets/images/webp/timesaving-ellipse.webp";
import Icons from "./common/Icon";

const TimeSaving = () => {
  return (
    <div className="xl:pt-[232px] md:pt-32 pt-20 pb-24 md:pb-32 lg:pb-64 xl:pb-[337px] relative">
      <div className="container xl:max-w-[1140px] xl:px-0 relative z-10">
        <div className="max-lg:flex-col-reverse flex flex-wrap -mx-3 max-lg:gap-6">
          <div className="w-full lg:w-1/2 mt-[31px] px-3">
            <Heading
              firstText="Efficiency, Overview, and&nbsp;"
              colorText="Time Savings"
              lastText=" for Contractors"
              lineCustomCss="after:-bottom-1"
              cutomClass="!max-w-[700px] lg:!max-w-[537px] max-lg:mx-auto max-lg:text-center"
              textStart
            />
            <div className="pt-4 max-lg:mx-auto text-center lg:text-start max-w-[700px] lg:max-w-[556px]">
              <p className="text-black text-opacity-70">
                In the world of contractors, a significant amount of time is
                spent preparing quotes, often during time that should be
                dedicated to life, not work. Umsjón software changes all of
                this. With Umsjón, you can reduce the time spent on
                administration and instead use your time to enjoy moments with
                your family or focus on other important life tasks.
              </p>
              <p className="text-black text-opacity-70 text-center lg:text-start pt-4">
                Umsjón is software that ensures an overview of all processes in
                the company's operations, so nothing goes unnoticed. Umsjón
                makes quote preparation for contractors simpler and faster with
                an exceptionally user-friendly interface, both on desktop and in
                a mobile app.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div className="max-w-[700px] lg:ml-auto max-lg:mx-auto lg:max-w-[508px]">
              <div className="px-8 max-w-[469px] lg:max-w-[423px] mx-auto pt-5 pb-[68px] bg-purple-blue rounded-[14px] text-white relative z-10 shadow-saving-card">
                <div className="max-w-[315px] text-center font-semibold leading-150 mx-auto text-xl">
                  use your time to enjoy moments with your family
                </div>
                <img
                  src={RobotImg}
                  width={77}
                  loading="lazy"
                  height={75}
                  className="absolute sm:w-[77px] pointer-events-none sm:h-[75px] w-14 h-14 animate-float-rotate-sit-less object-cover -z-10 right-[49px]  bottom-2"
                  alt="RobotImg"/>
              </div>
              <div className="relative">
                <img
                  loading="lazy"
                  src={SavingImage}
                  className="w-full shadow-saving-card object-cover rounded-10 mt-[14px] h-[290px] object-top lg:h-[325px] md:h-[448px] sm:h-[374px] "
                  width={508}
                  height={325}
                  alt="SavingImage"/>
                <div className="sm:p-3 p-2 bg-white rounded-xl absolute  shadow-saving-position bottom-[18px] left-[19px]">
                  <Icons icon="savingTime" className="sm:size-[59px] size-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={TimeSavingEllipse}
        className="absolute right-0 top-[104px] pointer-events-none"
        width={601}
        alt="TimeSavingEllipse"
      />
    </div>
  );
};

export default TimeSaving;