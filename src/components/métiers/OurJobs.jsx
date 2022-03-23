import React from "react";
import "../../assets/css/general.css";
import background from '../../assets/img/why-us.png'
function OurJobs() {
  return (
    <>
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Vente, installation et configuration
                  <strong>Des systèmes (Matériel & Logiciel).</strong>
                </h3>
                <p>
                  Des produits de connectivité sans fil, des solutions de
                  sécurité, de la collaboration et la visioconférence.
                </p>
              </div>

              <div className="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span>01</span> L’installation et la refonte de réseau
                      d’entreprise:
                      <i class="fa fa-arrow-down" aria-hidden="true"></i>
                      {/* <i class="fa fa-eye-slash" aria-hidden="true"></i> */}
                    </a>
                    <div
                      id="accordion-list-1"
                      className="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        le câblage informatique, la vidéosurveillance,
                        l’équipement de salles de serveur et centre de données.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      className="collapsed"
                    >
                      <span>02</span> Système d’exploitation :
                      <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </a>
                    <div
                      id="accordion-list-2"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>Windows & Linux.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      className="collapsed"
                    >
                      <span>03</span> Système de gestion de base de donnée :
                      <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </a>
                    <div
                      id="accordion-list-3"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>Oracle, SQLSERVER & MySql.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-4"
                      className="collapsed"
                    >
                      <span>03</span> Sécurité Active et passive :
                      <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </a>
                    <div
                      id="accordion-list-4"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>sécurité des locaux, des connexions et des données.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url(${background})` }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurJobs;
