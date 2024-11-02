import React from "react";
import Heading from "./common/Heading";
import phoneScreen from "../assets/images/webp/verkefni.webp";
const OnePlace = () => {
  return (
    <div className="2xl:max-w-[1265px] relative md:pt-40 pt-20 xl:pt-[238px] z-10 2xl:px-0 container">
      <div className="bg-purple-blue relative z-10 lg:pt-[62px] max-sm:p-6 max-lg:p-10 rounded-lg w-full  lg:pr-0 lg:pl-[76px]  lg:pb-[134px]">
        <div className="lg:py-[13px] mb-8 lg:mb-0 max-lg:p-2 lg:px-3 mx-auto lg:absolute top-1/2 lg:-translate-y-1/2 right-[60px]  xl:right-[182px] bg-gray-light w-max rounded-xl lg:rounded-28">
          <img
            src={phoneScreen}
            alt="phoneScreen"
            loading="lazy"
            width={298}
            className="xl:h-[546px] lg:h-[498px] rounded-xl object-cover h-[350px] w-[175px] lg:w-[250px] xl:w-[273px]"
            height={571}
          />
        </div>
        <Heading
          firstText="Everything in"
          colorText="one place"
          cutomClass="text-white max-lg:text-center mx-auto lg:mx-0 max-w-[558px]"
          textStart
          lineCustomCss="text-white after:-bottom-[6px]"
        />
        <p className="mt-[27px] font-normal text-gray-light text-center lg:text-start mx-auto lg:mx-0 text-opacity-70 max-w-[494px]">
          By having a clock and a to-do list at the same time place in the app,
          time is saved for maintenance and communication.
        </p>
        <p className="mt-[11px] font-normal text-gray-light text-center lg:text-start mx-auto lg:mx-0 text-opacity-70 max-w-[494px]">
          Supervision provides contractors with a detailed overview of project
          progress in real time, On top of everything, Umsjón runs reports on
          projects and employees which gives a complete insight into the
          company's productivity.
        </p>
        <span className="size-[38px] bg-white bg-opacity-10 rounded-sm absolute top-8 animate-scale-rotate rotate-[29deg] right-[7%] -z-10"></span>
        <span className="size-[38px] bg-white bg-opacity-10 rounded-sm absolute sm:block hidden animate-scale-rotate bottom-2 rotate-[29deg] left-[10%] -z-10"></span>
      </div>
    </div>
  );
};

export default OnePlace;
