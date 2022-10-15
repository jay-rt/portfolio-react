import React from "react";
import Home from "./Home/Home";
import About from "./About";
import Skills from "./Skills/Skills";
import Qualification from "./Qualification/Qualification";
import Services from "./Services/Services";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
    </main>
  );
};

export default Main;
