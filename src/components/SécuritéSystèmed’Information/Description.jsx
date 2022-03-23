import React from "react";
import Img from '../../assets/img/features-1.png'
import Slick from "../slick/Slick";
function Description() {
  return (
    <>
      <section id="features" className="features" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>CARACTÉRISTIQUES</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row content">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={Img}
                className="img-fluid"
                alt=""
              />
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
                <i class="fa fa-check" aria-hidden="true"></i> Extensible avec l’ajout de
                  module ou le changement de disque dur
                </li>
                <li>
                <i class="fa fa-check" aria-hidden="true"></i> Performent au vu de la
                  possible domiciliation aussi bien de répertoire de travail que
                  de base de données centralisé
                </li>
                <li>
                <i class="fa fa-check" aria-hidden="true"></i> Sécurisée : haute
                  disponibilité de données via le RAID de 0 à 10
                </li>
                <li>
                <i class="fa fa-check" aria-hidden="true"></i> Simplicité a administré
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Slick/>
      </section>
    
    </>
  );
}

export default Description;
