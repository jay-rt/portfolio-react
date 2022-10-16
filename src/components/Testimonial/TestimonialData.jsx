import React from "react";
import ImageTestimonial from "./ImageTestimonial";
import Rating from "./Rating";

const TestimonialData = (props) => {
  return (
    <div className="testimonial__data">
      <div className="testimonial__header">
        <ImageTestimonial source={props.image} />
        <div>
          <h3 className="testimonial__name">{props.name}</h3>
          <span className="testimonial__client">Client</span>
        </div>
      </div>
      <Rating />
    </div>
  );
};

export default TestimonialData;
