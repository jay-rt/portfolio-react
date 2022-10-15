import React from "react";

const HomeSocial = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="home__social-icon"
    >
      {props.icon}
    </a>
  );
};

export default HomeSocial;
