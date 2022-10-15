import React, { useState } from "react";
import SkillData from "./SkillData";

const Skills = () => {
  const initialState = { div1: false, div2: false };
  const [isSkillActive, setSkillActive] = useState(initialState);
  const handleSkill = (event) => {
    //closest look for elements and traverses towards parent untill it finds the specified selector
    const name = event.target.closest(".skills__header").dataset.name;
    setSkillActive((prevValue) => {
      return { ...initialState, [name]: !prevValue[name] };
    });
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My expertise</span>

      <div className="skills__container container grid">
        {/** Skills 1 */}
        <div
          className={
            "skills__content" + (isSkillActive.div1 ? " skills__open" : "")
          }
        >
          <div
            className="skills__header"
            data-name="div1"
            onClick={handleSkill}
          >
            <i className="uil uil-brackets-curly skills__icon"></i>

            <div>
              <h1 className="skills__title">Frontend developer</h1>
              <span className="skills__subtitle">More than 6 months</span>
            </div>

            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          <div className="skills__list grid">
            <SkillData name="HTML" level="Advanced" />
            <SkillData name="CSS" level="Intermediate" />
            <SkillData name="JavaScript" level="Intermediate" />
            <SkillData name="React" level="Beginner" />
          </div>
        </div>

        {/** Skills 2 */}
        <div
          className={
            "skills__content" + (isSkillActive.div2 ? " skills__open" : "")
          }
        >
          <div
            className="skills__header"
            data-name="div2"
            onClick={handleSkill}
          >
            <i className="uil uil-server-network skills__icon"></i>

            <div>
              <h1 className="skills__title">Backend developer</h1>
              <span className="skills__subtitle">More than 6 months</span>
            </div>

            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          <div className="skills__list grid">
            <SkillData name="Node.js" level="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
