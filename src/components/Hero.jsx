import React from "react";
import HeroImg from "../assets/images/webp/hero-laptop-mobile.webp";
import robot from "../assets/images/webp/robot-hero.webp";
import CustomButton from "./common/CustomButton";
import heroBg from "../assets/images/webp/hero-bg.webp";

const Hero = () => {
  return (
    <div className="relative z-10 overflow-x-clip">
      <div className="container pt-10 md:pt-16 lg:pt-[87px]">
        <h2 className="mx-auto font-bold text-4xl sm:text-5xl lg:text-custom-6xl max-w-[775px] text-center !leading-121">
          Time is precious <br /> Use it well with
          <span className="text-purple-blue"> Umsjon</span>
        </h2>
        <p className="sm:text-xl text-lg leading-150 max-w-[697px] mx-auto text-center text-black text-opacity-70 mt-5">
          Umsjon is a software that revolutionizes how contractors create and
          work with offers and projects, create and work with offers and
          projects,
        </p>
        <CustomButton customCss="flex mx-auto mt-6">
          Start Saving Time
        </CustomButton>
        <div className="relative mt-8 z-10">
          <img
            loading="lazy"
            src={HeroImg}
            alt="HeroImg"
            className="sm:w-full w-auto xl:h-[643px] sm:h-[383px] h-[216px]  md:h-[463px] lg:h-[625px] object-cover mx-auto max-w-[1014px]"
            width={1014}
            height={643}/>
          <img
            src={robot}
            loading="lazy"
            alt={robot}
            width={207}
            height={222}
            className="absolute w-14 h-[61px] animate-float-rotate-sit object-cover pointer-events-none sm:w-28 sm:h-[127px] lg:w-40 lg:h-[175px] xl:w-[207px] xl:h-[222px] right-0 xl:right-[5%] -top-4 sm:-top-20 md:-top-12"
          />
        </div>
      </div>
      <span className="size-[192px] bg-purple-blue bg-opacity-[50%] blur-[110px] absolute pointer-events-none max-md:hidden top-[11%] -z-10 -right-20"></span>
      <span className="size-[192px] bg-purple-blue bg-opacity-[50%] blur-[110px] absolute pointer-events-none bottom-[32%] -z-10 -left-20"></span>
      <img
        src={heroBg}
        loading="lazy"
        alt="heroBg"
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 -z-[11] pointer-events-none"
      />
    </div>
  );
};

export default Hero;