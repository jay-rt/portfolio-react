import React from "react";

const QualificationGraphic = (props) => {
  return props.final ? (
    <div>
      <span className="qualification__rounder"></span>
    </div>
  ) : (
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  );
};

export default QualificationGraphic;
