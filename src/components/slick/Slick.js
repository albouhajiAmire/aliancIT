import React, { useState } from "react";
import astronaut from "../../assets/img/team/Audit-de-sécurité.png";
import celebrating from "../../assets/img/team/ajj7mghrfkrg_17hfv8vpcd_b.png";
import education from "../../assets/img/team/FEL-Planification-vnements_1920x1080-en.jpg";
import taken from "../../assets/img/team/Traditional-vs-Virtual.png";
import informatique from "../../assets/img/team/brassage-salle-informatique.jpeg";
import istockphoto from "../../assets/img/team/istockphoto-1305083849-612x612.jpg";
import competitic from "../../assets/img/team/2011-04-14-to-ip-by-competitic-25-320.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import "./slick.css";
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
    dots: true ,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ] ,
    beforeChange: (current, next) => setImageIndex(next),
  };




  return (
    <>
      <div className="slickapp" style={{width : "100%"}}>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img style={{backgroundSize:"cover"}} src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Slick;
