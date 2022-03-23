import React from 'react';
import "../../assets/css/general.css";
import Client1 from "../../assets/img/clients/polycom-logo-600x287.jpg"
import Client2 from "../../assets/img/clients/jabra_logo.jpg"
import Client3 from "../../assets/img/clients/box_logo_full.jpg"
import Client4 from "../../assets/img/clients/hp.png"
import Client5 from "../../assets/img/clients/logo_apc.png"
import Client6 from "../../assets/img/clients/dell-emc.jpg"

function Suppliers() {
  return (
    <>
    <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client1} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client2} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client3} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client4} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client5} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Client6} className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Suppliers