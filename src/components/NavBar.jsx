import { useEffect, useState } from "react";
import CustomButton from "./common/CustomButton";
import { NAVBAR_LIST } from "../utils/helper";
import logo from "../assets/images/svg/logo.svg";
import { LOGIN } from "../utils/constant";

const NavBar = () => {
  // State to manage the open/closed state of the navigation menu
  const [openNav, setOpenNav] = useState(false);
  // Toggle the open/closed state of the navigation menu
  const ToggleNav = () => {
    setOpenNav(!openNav);
  };
  useEffect(() => {
    if (openNav) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [openNav]);
  return (
    <nav className="max-w-[1329px] mx-auto relative z-[11] px-4 sm:mt-[34px] mt-6">
      <div className="bg-white  shadow-light-black rounded-83 py-[18px]">
        <div className="flex justify-between md:justify-end lg:justify-between items-center px-6 md:px-14 lg:px-16 xl:px-20">
          <a
            href="#"
            className="lg:size-[111px] z-[51] md:size-20 md:absolute left-20 lg:left-1/2 lg:bg-white rounded-full top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex justify-center items-center"
          >
            <img
              src={logo}
              loading="lazy"
              width={66}
              height={66}
              alt="logo"
              className="md:size-12 size-9 lg:size-[66px]"
            />
          </a>
          <ul
            className={`flex max-lg:fixed max-lg:top-0 max-lg:justify-center max-lg:min-h-screen max-lg:flex-col max-lg:w-full duration-300 max-lg:z-[50] max-lg:bg-gray-light gap-6 items-center ${
              openNav ? "right-0" : "-right-full"
            } `}
          >
            {NAVBAR_LIST.map((obj, i) => (
              <li key={i}>
                <a
                  onClick={() => setOpenNav(false)}
                  href={obj.path}
                  className="text-black leading-121 font-normal relative z-10 after:absolute after:left-1/2 after:w-0 after:h-[1px] after:rounded-sm after:bg-rainbow-gradient after:pointer-events-none after:-bottom-0.5 hover:after:left-0 hover:after:w-full after:duration-300"
                >
                  {obj.text}
                </a>
              </li>
            ))}
            <a
              href={LOGIN}
              onClick={() => setOpenNav(false)}
              className="leading-121 sm:hidden hover:text-purple-blue duration-300 text-black capitalize font-normal"
            >
              Log In
            </a>
            <CustomButton fn={() => setOpenNav(false)} customCss="sm:hidden">
              Book Time
            </CustomButton>
          </ul>
          <div className="flex gap-4 md:gap-[29px] items-center">
            <a
              href={LOGIN}
              className="leading-121 sm:block hidden hover:text-purple-blue duration-300 text-black capitalize font-normal"
            >
              Log In
            </a>
            <CustomButton customCss="sm:block hidden">Book Time</CustomButton>
            <div
              className="w-6 h-[18px] relative flex flex-col justify-between z-50 lg:hidden cursor-pointer"
              onClick={ToggleNav}>
              <span
                className={`block w-4 duration-300 h-0.5 bg-black float-start ${
                  openNav &&
                  "rotate-45 !w-full absolute top-1/2 -translate-y-1/2"
                }`}></span>
              <span
                className={`block w-full duration-300 h-0.5 bg-black ${
                  openNav && "opacity-0"
                }`}
              ></span>
              <span
                className={`block w-4 duration-300 h-0.5 bg-black ms-auto ${
                  openNav &&
                  "-rotate-45 !w-full absolute top-1/2 -translate-y-1/2"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
