import React from "react";
import Home from "./Home/Home";
import About from "./About";
import Skills from "./Skills/Skills";
import Qualification from "./Qualification/Qualification";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Project from "./Project";
import Testimonial from "./Testimonial/Testimonial";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Project />
      <Testimonial />
    </main>
  );
};

export default Main;
