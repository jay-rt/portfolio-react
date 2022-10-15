import React from "react";

const ViewMore = (props) => {
  return (
    <span
      className="button button--flex button--small button--link services__button"
      data-modal={props.modal}
      onClick={props.click}
    >
      View More
      <i className="uil uil-arrow-right button__icon"></i>
    </span>
  );
};

export default ViewMore;
