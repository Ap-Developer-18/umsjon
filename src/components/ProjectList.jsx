import React from "react";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton";
import projectData from "../assets/images/webp/project.webp";
import listProject from "../assets/images/webp/project-list.webp";
import Icons from "./common/Icon";

const ProjectList = () => {
  return (
    <div className="relative z-10 ">
      <div className="container xl:max-w-[1140px] xl:px-0">
        <div className="flex flex-wrap flex-row -mx-3 ">
          <div className="lg:w-[56.1%] w-full px-3">
            <div className="relative z-10">
              <img
                src={projectData}
                loading="lazy"
                width={385}
                height={397}
                alt="projectData"
                className="shadow-black-cross xl:h-[397px] lg:h-[345px] md:h-[466px] w-full object-top sm:h-[385px] h-[217px] object-cover rounded-xl"
              />
              <img
                width={183}
                loading="lazy"
                height={385}
                src={listProject}
                alt="listProject"
                className="absolute -left-1 sm:-left-2 animate-float-rotate-sit-less -top-7 w-[110px] h-[214px] sm:w-[180px] sm:h-[351px] md:w-[215px] md:h-[420px] lg:w-[160px] xl:w-[183.33px] lg:h-[320px] xl:h-[358px] object-cover rounded-xl shadow-black-loss"
              />
              <span className="absolute animate-scale-drop top-[-18%] max-sm:hidden lg:top-[-24%] pointer-events-none left-[32%]">
                <Icons icon="arrowEllipse" />
              </span>
              <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[100px] absolute pointer-events-none max-md:hidden bottom-[1%] -z-10 left-0"></span>
              <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden top-[5%] -z-10 right-[10%]"></span>
              <span className="size-[154px] bg-light-yellow  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden top-[7%] -z-10 right-[9%]"></span>
            </div>
          </div>
          <div className="lg:w-[43.9%] my-auto max-lg:mt-8 w-full px-3">
            <div className="max-w-[426px] max-lg:mx-auto  lg:ml-auto">
              <Heading
                firstText="Project"
                colorText="list"
                cutomClass="mb-1.5 max-lg:text-center"
                textStart
                lineCustomCss="after:-bottom-0"
              />
              <p className="!leading-150 text-black max-lg:text-center text-opacity-70 font-normal text-base pt-[9px]">
                A complete overview of your projects in real time
              </p>
              <p className="!leading-150 text-black max-lg:text-center text-opacity-70 max-w-[390px] font-normal text-base mt-1 sm:mt-[9px]">
                With Umsjón, you can monitor all procedures in real time from a
                computer or phone.
              </p>
              <p className="!leading-150 text-black max-lg:text-center text-opacity-70 font-normal text-base mt-1 sm:mt-[9px]">
                Jobs are easily added to the system anywhere, anytime.
              </p>
              <CustomButton customCss="md:mt-9 mt-6 flex max-lg:mx-auto ">
                Start Saving Time
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
