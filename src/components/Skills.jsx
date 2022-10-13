import React, { useState } from "react";

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
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
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
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
