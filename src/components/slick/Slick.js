import React, { useState } from "react";
import './slick.css'
import astronaut from "../../assets/img/clients/Audit-de-sécurité.png";
import celebrating from "../../assets/img/clients/ajj7mghrfkrg_17hfv8vpcd_b.png";
import education from "../../assets/img/clients/FEL-Planification-vnements_1920x1080-en.jpg";
import taken from "../../assets/img/clients/Traditional-vs-Virtual.png";
import informatique from "../../assets/img/clients/brassage-salle-informatique.jpeg";
import istockphoto from "../../assets/img/clients/istockphoto-1305083849-612x612.jpg";
import competitic from "../../assets/img/clients/2011-04-14-to-ip-by-competitic-25-320.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const images = [
  astronaut,
  celebrating,
  education,
  taken,
  informatique,
  istockphoto,
  competitic,
];
function Slick() {
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

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="slickapp">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Slick;
