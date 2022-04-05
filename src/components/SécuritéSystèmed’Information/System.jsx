import React from "react";
import Img from '../../assets/img/svg/hero-img.png'
function System() {
  return (
    <>
      <section id="heroo" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
            >
              <div>
                <h1>App landing page template</h1>
                <h2>
                  Lorem ipsum dolor sit amet, tota senserit percipitur ius ut,
                  usu et fastidii forensibus voluptatibus. His ei nihil feugait
                </h2>

              </div>
              <div className="go-down">
              <i className="fas fa-angle-double-down fa-2x "></i>
              </div>
            </div>
            <div
              className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
              data-aos="fade-up"
            >
              <img src={Img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default System;
