import React from "react";
import Client1 from "../../assets/img/clients/one.jpg";
import Client2 from "../../assets/img/clients/polycom-logo-600x287.jpg";
import Client3 from "../../assets/img/clients/-Kaspersky_Lab_logo.svg.png";
import Client4 from "../../assets/img/clients/bit.png";
import Client5 from "../../assets/img/clients/cisco-logo.png";
import Client6 from "../../assets/img/clients/watchguard-logo-300x205.png";
import Client7 from "../../assets/img/clients/peplink-vector-logo.png";
import Client8 from "../../assets/img/clients/Fortinet-01.jpg";

function Clients() {
  return (
    <>
      <section id="clientss" className="clientss">
        <div className="container">
          <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client1} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client2} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client3} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client4} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client5} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client6} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client7} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="clientss-logo">
                <img src={Client8} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
