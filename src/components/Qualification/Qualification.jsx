import React, { useState } from "react";
import QualificationData from "./QualificationData";
import QualificationGraphic from "./QualificationGraphic";

const Qualification = () => {
  const resetState = { education: false, work: false };
  const [isActive, setActive] = useState({
    education: true,
    work: false,
  });
  const handleClick = (event) => {
    let activeTab = event.target.dataset.target;
    activeTab = activeTab.substring(1);
    setActive({ ...resetState, [activeTab]: true });
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              "qualification__button button--flex" +
              (isActive.education ? " qualification__active" : "")
            }
            data-target="#education"
            onClick={handleClick}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              "qualification__button button--flex" +
              (isActive.work ? " qualification__active" : "")
            }
            data-target="#work"
            onClick={handleClick}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
          </div>
        </div>

        <div className="qualification__sections">
          {/** Qualification Content 1 */}
          <div
            className={
              "qualification__content" +
              (isActive.education ? " qualification__active" : "")
            }
            data-content
            id="education"
          >
            {/** Qualification 1 */}
            <div className="qualification__data">
              <QualificationData
                title="Bachelors in Electronics and Communication Engineering"
                subtitle="Advanced College of Engineering and Management"
                time="2011-2016"
              />
              <QualificationGraphic final={false} />
            </div>

            {/** Qualification 2 */}
            <div className="qualification__data">
              <div></div>
              <QualificationGraphic final={false} />
              <QualificationData
                title="Mobile Application Developer"
                subtitle="Cambrian College"
                time="2020 - 2020"
              />
            </div>

            {/** Qualification 3 */}
            <div className="qualification__data">
              <QualificationData
                title="Business Analytics"
                subtitle="Cambrian College"
                time="2021 - 2021"
              />
              <QualificationGraphic final={true} />
            </div>
          </div>

          {/** Qualification Content 2 */}
          <div
            className={
              "qualification__content" +
              (isActive.work ? " qualification__active" : "")
            }
            data-content
            id="work"
          >
            {/** Qualification 1 */}
            <div className="qualification__data">
              <QualificationData
                title="Research and Development Engineer"
                subtitle="Gunina Technotronix"
                time="2017 - 2019"
              />
              <QualificationGraphic final={false} />
            </div>

            {/** Qualification 2 */}
            <div className="qualification__data">
              <div></div>
              <QualificationGraphic final={false} />
              <QualificationData
                title="Kitchen Helper"
                subtitle="Lasalle Residence"
                time="2020 - Present"
              />
            </div>

            {/** Qualification 3 */}
            <div className="qualification__data">
              <QualificationData
                title="Salesfloor Associate"
                subtitle="Walmart Canada"
                time="2021 - Present"
              />
              <QualificationGraphic final={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
