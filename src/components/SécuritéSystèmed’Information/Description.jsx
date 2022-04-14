import React from "react";
import Img from "../../assets/img/svg/features-1.png";
import Slick from "../slick/Slick";

function Description() {
  return (
    <>
      <section id="features" className="features" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>CARACTÉRISTIQUES</h2>
          </div>
          <div className="row content">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={Img} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>
                Extensible sécurisée et performent tel et la définition d’un NAS
                de stockage.
              </h3>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Extensible
                  avec l’ajout de module ou le changement de disque dur
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Performent
                  au vu de la possible domiciliation aussi bien de répertoire de
                  travail que de base de données centralisé
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Sécurisée :
                  haute disponibilité de données via le RAID de 0 à 10
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Simplicité
                  a administré
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Slick />
      </section>
    </>
  );
}

export default Description;
