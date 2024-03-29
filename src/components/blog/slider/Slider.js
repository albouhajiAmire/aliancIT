import React ,{useState}from "react";
import "./slider.css";
import background from "../../../assets/img/team/post-slide-1.jpg";
import background1 from "../../../assets/img/team/post-slide-2.jpg";
import background2 from "../../../assets/img/team/post-slide-3.jpg";
import background3 from "../../../assets/img/team/post-slide-1.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";



function Sliders() {
  const slides = [
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
      img: background,
    },
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
      img: background1,
    },
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
      img: background2,
    },
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
      img: background3,
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev " style={{marginTop:'12px'}} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

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

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <section id="hero-slider" className="hero-slider" >
        <div className="container-md " data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <div className="swiper sliderFeaturedPosts">
                <div className="swiper-wrapper">
                  <Slider {...settings}>
                    {slides.map((slide, idx) => (
                      <div
                        key={idx}
                        className={
                          idx === imageIndex
                            ? "slide activeSlide swiper-slide"
                            : "slide swiper-slide  "
                        }
                        // className={classNames('slide swiper-slide', { activeSlide:  idx === imageIndex })}
                      >
                        <a
                          href="single-post.html"
                          className="img-bg d-flex align-items-end"
                          style={{ backgroundImage: `url(${slide.img})` }}
                        >
                          <div className="img-bg-inner">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sliders;
