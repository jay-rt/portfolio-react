import React from "react";
import Home from "./Home/Home";
import About from "./About";
import Skills from "./Skills/Skills";
import Qualification from "./Qualification/Qualification";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
    </main>
  );
};

export default Main;
