import { useEffect, useState } from "react";
import scrollTopSvg from "../../assets/images/svg/back-to-top.svg";
const ScrollTop = () => {
  // State to track the current scroll position
  const [scrollValue, setScrollValue] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, [scrollValue]);
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="scroll top"
      onClick={scrollTopHandler}
      className={`fixed bottom-[2%] right-[2%] z-50 bg-white flex h-10 w-10 items-center justify-center overflow-hidden rounded-full hover:shadow-low-purple transition-all duration-500 2xl:right-[calc((100vw-1536px)/2)] ${
        showScrollTop ? "translate-y-0 scale-100" : "translate-y-[40px] scale-0"
      }`}
    >
      <img
        loading="lazy"
        height={50}
        width={50}
        src={scrollTopSvg}
        alt="BackToTop"
      />
    </button>
  );
};

export default ScrollTop;
