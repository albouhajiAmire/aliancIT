import React from "react";
import "../../assets/css/general.css";
import Img1 from "../../assets/img/clients/Apple_logo_black.svg";
import Img2 from "../../assets/img/clients/cisco-logo.png";
import Img3 from "../../assets/img/clients/kisspng-peplink.jpg";
import Img4 from "../../assets/img/clients/fortinet.jpg";
import Img5 from "../../assets/img/clients/kisspng-linux.jpg";
import Img6 from "../../assets/img/clients/windows.jpg";
import Img7 from "../../assets/img/clients/oracle-logo.jpg";
import Img8 from "../../assets/img/clients/microsoft-logo-2012-present.jpg";
import Img9 from "../../assets/img/clients/mysql.jpg";

export default function Features() {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Solutions IT</h2>
            <p>Administration réseau, Systèmes & Base de Données</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <img src={Img1} alt="" style={{ width: "20%" }} />
                <h3>Apple</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <img src={Img2} alt="" style={{ width: "30%" }} />
                <h3>Cisco </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <img src={Img3} alt="" style={{ width: "20%" }} />
                <h3>PepLink </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <img src={Img4} alt="" style={{ width: "20%" }} />
                <h3>Fortinet </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img src={Img5} alt="" style={{ width: "20%" }} />
                <h3>Linux</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img src={Img6} alt="" style={{ width: "20%" }} />
                <h3>Windows Server</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img src={Img7} alt="" style={{ width: "20%" }} />
                <h3>Oracle </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img src={Img8} alt="" style={{ width: "20%" }} />
                <h3>Microsoft SQL SERVER</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img src={Img9} alt="" style={{ width: "20%" }} />
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
