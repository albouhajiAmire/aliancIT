import React from "react";
import "../../assets/css/general.css";
import background from "../../assets/img/team/serveur.jpg";
import Img1 from "../../assets/img/clients/kaspersky.png";
import Img2 from "../../assets/img/clients/bit.png";

function Sécurité() {
  return (
    <>
      {/* <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Sécurité Système d’Information :</h2>
            <p>
              Magnam dolores commodi suscipit eius consequatur ex aliquid fug
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                 
                  <img src={Img1} alt="" style={{width:"60%"}}/>
                </div>
                <h4 className="title">
                  <a href="">Antivirus : </a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                <img src={Img2} alt=""  style={{width:"60%"}}/>
                </div>
                <h4 className="title">
                  <a href="">Antivirus :</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="more-services" className="more-services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Sécurité Système d’Information :</h2>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div
                className="card"
                style={{ backgroundImage: `url(${background})` }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Travaux :</a>
                  </h5>
                  <p className="card-text">
                    Pré-câblage informatique et téléphonique, Salle technique ;
                    Bureau clé en main, Vidéo surveillance
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
              <div
                className="card"
                style={{ backgroundImage: `url(${background})` }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Limere Radses</a>
                  </h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ">
              <div
                className="card"
                style={{ backgroundImage: `url(${background})` }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Pale Treda</a>
                  </h5>
                  <p className="card-text">
                    Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                    quisquam laudantium voluptatem.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sécurité;
