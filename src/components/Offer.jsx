import React from "react";
import Heading from "./common/Heading";
import typeOffer from "../assets/images/png/type-offer.png";
import offerList from "../assets/images/png/type-offer-list.png";
import typeOfferEllipse from "../assets/images/png/type-offer-bg-ellipse.png";
import typeBgLines from "../assets/images/svg/type-offer-bg-lines.svg";
import Icons from "./common/Icon";

const Offer = () => {
  return (
    <div className="xl:pt-[491px] xl:pb-[318px] lg:py-64 md:pt-64 sm:pt-36 pt-32 md:pb-40 sm:pb-28 pb-24 relative z-10 overflow-hidden">
      <span className="absolute z-10 bottom-[22%] rotate-[160deg] left-[38%] xl:block hidden">
        <Icons icon="arrowEllipse" />
      </span>
      <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[90px] absolute pointer-events-none max-md:hidden bottom-[17%] -z-10 left-[55%] -translate-x-1/2"></span>
      <span className="size-[154px] bg-purple-blue  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden xl:top-[39%] top-[19%] -z-10 right-[14%]"></span>
      <span className="size-[154px] bg-light-yellow  bg-opacity-[50%] blur-[70px] absolute pointer-events-none max-md:hidden xl:top-[39%] top-[19%] -z-10 right-[9%]"></span>
      <img
        src={typeOfferEllipse}
        width={813}
        height={800}
        loading="lazy"
        alt="type offer bg"
        className="lg:w-[863px] xl:w-[813px] 2xl:w-[1140px] w-[800px] lg:h-[671px] min-w-[610px] absolute xl:top-[30%] md:top-[3%] sm:top-4 top-4 xl:-left-[11%] lg:-left-[15%] left-1/2 lg:translate-x-0 -translate-x-1/2"
      />
      <img
        src={typeBgLines}
        alt="bg lines"
        loading="lazy"
        width={1723}
        height={595}
        className="absolute w-[1723px] h-[595px] xl:top-[30%] lg:top-0 top-[20%] lg:left-[13%] left-0 scale-[1.3] lg:scale-100"
      />
      <div className="container xl:max-w-[1140px] xl:px-0">
        <div className="flex lg:flex-row flex-col justify-between items-center xl:gap-[140px] lg:gap-20 md:gap-16 sm:gap-12 gap-9">
          <div className="max-w-[380px] mx-auto w-full relative z-10">
            <Heading
              firstText="Type of"
              colorText="Offer"
              cutomClass="text-white max-lg:text-center mx-auto lg:mx-0 max-w-[558px]"
              textStart
              lineCustomCss="text-white after:-bottom-[6px]"
            />
            <p className="pt-6 text-white lg:text-start text-center font-normal text-base leading-150 opacity-70">
              Save time and money with Direct on-site bidding and send
              immediately from the phone.
            </p>
            <p className="pt-[11px] text-white lg:text-start text-center font-normal text-base leading-150 opacity-70">
              Additional works are also submitted for approval with a one-click
              purchase of works that eliminates payment misunderstandings.
            </p>
          </div>
          <div className="relative lg:pl-0 pl-7 w-full">
            <img
              src={typeOffer}
              loading="lazy"
              width={550}
              height={394}
              alt="type offer"
              className="xl:max-w-[622px] lg:max-w-[550px] w-full object-cover rounded-xl xl:h-[394px] lg:h-[336px] md:h-[448px] sm:h-[367px] h-[217px] shadow-black-cross"
            />
            <img
              loading="lazy"
              width={168}
              height={146}
              src={offerList}
              alt="type offer list"
              className="md:max-w-[168px] max-w-[120px] w-full md:h-[146px] h-[110px] shadow-light-grey absolute md:top-[71px] top-10 object-cover lg:-left-7 -left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
