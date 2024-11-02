import React from "react";
import Heading from "./common/Heading";
import report from "../assets/images/webp/reporting.webp";
import reportList from "../assets/images/webp/reporting-list.webp";
import animatedLine from "../assets/images/svg/report-animated-lines.svg";
import CustomButton from "./common/CustomButton";

const Reporting = () => {
  return (
    <div className="relative z-10 lg:mt-36 mt-20 md:mt-44 xl:mt-[221px]">
      <div className="container xl:max-w-[1140px] xl:px-0">
        <div className="flex flex-wrap -mx-3 flex-row">
          <div className="lg:w-[57.5%] w-full px-3">
            <div className="relative z-10">
              <img
                src={report}
                alt="report"
                loading="lazy"
                width={645}
                className="w-full object-top lg:h-[354px] h-[248px] md:h-[465px] sm:h-[384px] object-cover xl:h-[408px] rounded-xl shadow-black-cross"
                height={408}
              />
              <img
                src={reportList}
                alt="reportList"
                loading="lazy"
                width={175}
                height={475}
                className="md:w-[175px] sm:w-[140px] w-[110px] h-[297px] animate-float-rotate-sit-less sm:h-[378px] md:h-[475px] absolute -top-[7%] sm:-top-[1%] lg:-top-[12%] xl:-top-[8%] rounded-14 right-0 lg:-right-[21px]"
              />
              <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[100px] absolute pointer-events-none max-md:hidden bottom-[1%] -z-10 left-0"></span>
              <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden top-[5%] -z-10 right-[10%]"></span>
              <span className="size-[154px] bg-light-yellow  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden top-[7%] -z-10 right-[9%]"></span>
            </div>
          </div>
          <div className="lg:w-[42.5%] max-lg:mt-9 lg:my-auto w-full px-3">
            <div className="max-w-[380px] max-lg:mx-auto lg:ml-auto">
              <Heading
                firstText="Reporting"
                cutomClass="mb-[15px] max-lg:text-center"
                textStart
              />
              <p className="!leading-150 text-black max-lg:text-center text-opacity-70 font-normal text-base pt-[9px]">
                A must have for every contractor!
              </p>
              <p className="!leading-150 text-black max-lg:text-center text-opacity-70 font-normal text-base max-w-[345px]">
                Supervision is one system with all elements of operation from
                offers to shipping invoices, that's why Management analysis tool
                on the status of VAT, wages.
              </p>
              <CustomButton customCss="md:mt-[30px] mt-6 flex max-lg:mx-auto ">
                Start Saving Time
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <img
        src={animatedLine}
        loading="lazy"
        alt="animatedLine"
        className="absolute left-0 pointer-events-none -z-10 -top-[30%] lg:-top-[79%]"
      />
    </div>
  );
};

export default Reporting;
