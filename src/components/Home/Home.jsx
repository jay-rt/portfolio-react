import React from "react";
import HomeSocial from "./HomeSocial";
import HomeBlob from "./HomeBlob";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <HomeSocial
              link="https://linkedin.com"
              icon=<i className="uil uil-linkedin-alt"></i>
            />
            <HomeSocial
              link="https://github.com"
              icon=<i className="uil uil-github-alt"></i>
            />
            <HomeSocial
              link="https://twitter.com"
              icon=<i className="uil uil-twitter-alt"></i>
            />
          </div>

          <div className="home__img">
            <HomeBlob />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Jay.</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies, delivering quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
