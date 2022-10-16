import React from "react";
import TestimonialData from "./TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import TestimonialDescription from "./TestimonialDescription";
import testimonial1 from "../../assets/img/testimonial1.jpg";
import testimonial2 from "../../assets/img/testimonial2.jpg";
import testimonial3 from "../../assets/img/testimonial3.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">What my clients have to say</span>

      <Swiper
        modules={[Pagination]}
        className="testimonial__container container"
        loop={true}
        grabCursor={true}
        spaceBetween={48}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{ 568: { slidesPerView: 2 } }}
      >
        {/** Testimonial 1 */}
        <SwiperSlide className="testimonial__content">
          <TestimonialData image={testimonial1} name="Sara Smith" />
          <TestimonialDescription />
        </SwiperSlide>

        {/** Testimonial 2 */}
        <SwiperSlide className="testimonial__content">
          <TestimonialData image={testimonial2} name="Matt Davidson" />
          <TestimonialDescription />
        </SwiperSlide>

        {/** Testimonial 3 */}
        <SwiperSlide className="testimonial__content">
          <TestimonialData image={testimonial3} name="Raul Harris" />
          <TestimonialDescription />
        </SwiperSlide>

        {/** Pagination */}
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
