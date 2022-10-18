import React from "react";

const ContactInfo = (props) => {
  return (
    <div className="contact__information">
      {props.icon}
      <div>
        <h3 className="contact__title">{props.title}</h3>
        <span className="contact__subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
