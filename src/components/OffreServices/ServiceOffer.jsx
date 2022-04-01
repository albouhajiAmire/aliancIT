import React from "react";
function ServiceOffer() {

  return (
    <>
      <section id="hero" className="d-flex align-items-center" >
        <div className="container"> 
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Offre de Services</h1>
              <h2>
              La technologie au service de la productivité
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                Commencer
                </a>


                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" target="_blank" className="btn-watch-video" >
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
              {/* <img src={Img} className="img-fluid animated" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceOffer;
