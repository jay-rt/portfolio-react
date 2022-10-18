import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop - 1;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  useEffect(() => {
    console.log("New active section");
    const sectionRefs = [
      { section: "home", ref: homeRef },
      { section: "about", ref: aboutRef },
      { section: "skills", ref: skillsRef },
      { section: "services", ref: servicesRef },
      { section: "portfolio", ref: portfolioRef },
      { section: "contact", ref: contactRef },
    ];

    const scrollActive = () => {
      const scrollY = window.scrollY;
      sectionRefs.forEach(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          if (
            scrollY >= offsetTop &&
            scrollY < offsetBottom &&
            activeSection !== section
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
      console.log("Active section changed");
    };
  }, [activeSection]);

  return (
    <>
      <Header active={activeSection} />
      <main className="main">
        <Home reference={homeRef} />
        <About reference={aboutRef} />
        <Skills reference={skillsRef} />
        <Qualification />
        <Services reference={servicesRef} />
        <Portfolio reference={portfolioRef} />
        <Project />
        <Testimonial />
        <Contact reference={contactRef} />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;
