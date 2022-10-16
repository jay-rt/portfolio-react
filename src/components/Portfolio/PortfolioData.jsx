import React from "react";

const PortfolioData = (props) => {
  return (
    <div className="portfolio__data">
      <h3 className="portfolio__title">{props.title}</h3>
      <p className="portfolio__description">
        Website adaptable to all devices, with ui components and animated
        interactions.
      </p>
      <a
        href="/"
        className="button button--flex button--small portfolio__button"
      >
        Demo
        <i className="uil uil-arrow-right button__icon"></i>
      </a>
    </div>
  );
};

export default PortfolioData;
