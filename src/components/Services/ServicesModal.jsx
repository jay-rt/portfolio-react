import React from "react";

const ServicesModal = (props) => {
  return (
    <div className={"services__modal" + (props.open ? " active-modal" : "")}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {props.top} <br /> {props.bottom}
        </h4>
        <i
          className="uil uil-times services__modal-close"
          onClick={props.close}
        ></i>

        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>I develop user interface.</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>Web page development.</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>I create ux element interactions.</p>
          </li>
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>I position your company brand.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
