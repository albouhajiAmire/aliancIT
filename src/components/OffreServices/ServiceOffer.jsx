import React from "react";
import Img from "../../assets/img/svg/hero-img1.png";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function ServiceOffer() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slide activeSlide swiper-slide">
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h1>Offre de Services one</h1>
                  <h2>La technologie au service de la productivité</h2>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <a href="#about" className="btn-get-started scrollto">
                      Commencer
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                      target="_blank"
                      className="btn-watch-video"
                    >
                      <i className="fa-solid fa-circle-play"></i>
                      <span>Regarder la vidéo</span>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img src={Img} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="slide  activeSlide swiper-slide">
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h1>Offre de Services two</h1>
                  <h2>La technologie au service de la productivité</h2>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <a href="#about" className="btn-get-started scrollto">
                      Commencer
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                      target="_blank"
                      className="btn-watch-video"
                    >
                      <i className="fa-solid fa-circle-play"></i>
                      <span>Regarder la vidéo</span>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img src={Img} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </>
  );
}

export default ServiceOffer;
