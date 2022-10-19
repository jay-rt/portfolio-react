import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    console.log("event listener added");
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 560) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      console.log("event listener removed");
    };
  }, [scrollToTop]);

  return (
    <a
      href="#home"
      className={"scrollup" + (scrollToTop ? " show-scroll" : "")}
      id="scroll-up"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollTop;
