import React from "react";
import Heading from "./common/Heading";
import BenefitImg from "../assets/images/webp/benefit-img.webp";
import Icons from "./common/Icon";
import { BENEFIT_LIST } from "../utils/helper";

const Benefit = () => {
  return (
    <div className="lg:pt-44 pt-20 md:pt-32 xl:pt-[340px]">
      <div className="container xl:max-w-[1140px] xl:px-0">
        <Heading
          firstText="What"
          colorText="benefit"
          lastText="will you get from using it?"
          cutomClass="max-w-[588px] mx-auto"
          lineCustomCss="after:-bottom-1"
        />
        <p className="max-w-[676px] mx-auto text-center text-black text-opacity-70 mt-3">
          Managing a contracting business has never been easier. Our software is
          designed specifically to streamline your operations, from generating
          quotes to sending invoices.
        </p>
        <div className="flex flex-wrap flex-row mt-12 lg:mt-[75px] -mx-3">
          <div className="w-full lg:w-[42.63%] my-auto px-3">
                      <img
                          loading="lazy"
              src={BenefitImg}
              width={472}
              height={710}
              className="w-full h-[350px] md:h-[500px] rounded-10 object-cover object-center lg:h-[614px] xl:h-[710px]"
              alt="BenefitImg"
            />
          </div>
          <div className="w-full lg:w-[57.37%] px-3 flex justify-center mt-9 lg:mt-0 lg:justify-end">
            <div className="lg:max-w-[594px]">
              {BENEFIT_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`mt-6 xl:mt-[31px] max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center ${
                    i === 0 && "!mt-0"
                  }`}
                >
                  <div className="bg-purple-blue py-2 flex justify-center items-center size-[69px] rounded shadow-benefit-box">
                    <Icons icon={obj.icon} className="animate-scale-drop" />
                  </div>
                  <h2 className="font-bold text-2xl lg:text-start text-center leading-121 mt-4 xl:mt-[22px]">
                    {obj.title}
                  </h2>
                  <p className="mt-2 xl:mt-[11px] text-center lg:text-start max-lg:max-w-[600px] text-black text-opacity-70">
                    {obj.description}
                  </p>
                </div>
              ))}

              <a
                href="#"
                className="text-purple-blue flex mx-auto lg:mx-0 lg:block hover:after:w-0 after:duration-300 hover:text-black duration-300 hover:after:left-1/2 relative z-10 after:-z-10 after:absolute after:left-0  after:bg-rainbow-gradient after:h-[3px] after:w-full after:rounded-42 font-bold w-fit after:-bottom-1 sm:mt-8 mt-4"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
