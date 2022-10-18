import React, { useState } from "react";
import ViewMore from "./ViewMore";
import ServicesModal from "./ServicesModal";

const Services = (props) => {
  const initialState = { ui: false, frontend: false };
  const [isModalOpen, setModalOpen] = useState(initialState);
  const handleOpen = (event) => {
    const modal = event.target.dataset.modal;
    setModalOpen({ ...initialState, [modal]: true });
  };
  const handleClose = () => {
    setModalOpen({ initialState });
  };
  return (
    <section className="services section" id="services" ref={props.reference}>
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I can offer</span>

      <div className="services__container container grid">
        {/** Services 1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br />
              Designer
            </h3>
          </div>

          <ViewMore click={handleOpen} modal="ui" />
          <ServicesModal
            top="UI/UX"
            bottom="Designer"
            open={isModalOpen.ui}
            close={handleClose}
          />
        </div>

        {/** Services 2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br />
              Developer
            </h3>
          </div>

          <ViewMore click={handleOpen} modal="frontend" />
          <ServicesModal
            top="Frontend"
            bottom="developer"
            open={isModalOpen.frontend}
            close={handleClose}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
