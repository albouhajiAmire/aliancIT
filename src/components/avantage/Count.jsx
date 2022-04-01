import React from "react";
import Img from "../../assets/img/skills.png";
import "../../assets/css/general.css";

function Count() {
  return (
    <>
      <section id="counts" className="counts mt-5">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i class="fa-solid fa-chess-pawn"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        +25
                      </span>
                      <p>
                        <strong>d'expérience en référencement</strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i class="fa-solid fa-handshake"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        +500
                      </span>
                      <p>
                        <strong> Clients nous ont fait confiance</strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        12
                      </span>
                      <p>
                        <strong>Collaborateurs passionés du web </strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="18"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        1
                      </span>
                      <p>
                        <strong>Laboratoire de R & D</strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        60%
                      </span>
                      <p>
                        <strong>de nos clients sont satisfaits</strong>
                      </p>
                    </div>
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

export default Count;
