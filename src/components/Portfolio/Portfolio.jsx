import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import PortfolioImage from "./PortfolioImage";
import PortfolioData from "./PortfolioData";
import portfolio1 from "../../assets/img/portfolio1.jpg";
import portfolio2 from "../../assets/img/portfolio2.jpg";
import portfolio3 from "../../assets/img/portfolio3.jpg";

//Import Swiper styles

const Portfolio = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        cssMode={true}
        loop={true}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="portfolio__container container"
      >
        <SwiperSlide className="portfolio__content grid">
          <PortfolioImage source={portfolio1} />
          <PortfolioData title="Modern Website" />
        </SwiperSlide>
        <SwiperSlide className="portfolio__content grid">
          <PortfolioImage source={portfolio2} />
          <PortfolioData title="Brand Design" />
        </SwiperSlide>
        <SwiperSlide className="portfolio__content grid">
          <PortfolioImage source={portfolio3} />
          <PortfolioData title="Online Store" />
        </SwiperSlide>

        {/** Navigation Button*/}
        <div ref={prevRef} className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div ref={nextRef} className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default Portfolio;
