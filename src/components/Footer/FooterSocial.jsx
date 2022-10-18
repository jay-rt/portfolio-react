import React from "react";

const FooterSocial = (props) => {
  return (
    <a
      href={props.link}
      className="footer__social"
      target="_blank"
      rel="noreferrer"
    >
      {props.icon}
    </a>
  );
};

export default FooterSocial;
