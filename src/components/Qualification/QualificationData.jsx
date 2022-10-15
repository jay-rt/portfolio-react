import React from "react";

const QualificationData = (props) => {
  return (
    <div>
      <h3 className="qualification__title">{props.title}</h3>
      <span className="qualification__subtitle">{props.subtitle}</span>
      <div className="qualification__calendar">
        <i className="uil uil-calendar-alt"></i> {props.time}
      </div>
    </div>
  );
};

export default QualificationData;
