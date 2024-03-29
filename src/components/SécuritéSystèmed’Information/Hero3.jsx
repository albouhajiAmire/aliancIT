import React from "react";
import Img from '../../assets/img/svg/dev_productivity.svg'
function Hero3() {
  return (
    <>
      <section id="hero3" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Creating websites that make you stop & stare</h1>
              <h2>
                Accusantium quam, aliquam ultricies eget tempor id, aliquam eget
                nibh et. Maecen aliquam, risus at semper. Proin iaculis purus
                consequat sem cure digni ssim. Donec porttitora entum.
              </h2>
              <div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={Img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero3;
