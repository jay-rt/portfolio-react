import React from "react";

const SkillData = (props) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{props.name}</h3>
        <span className="skills__level">{props.level}</span>
      </div>
    </div>
  );
};

export default SkillData;
