import React from "react";
import "../../assets/css/general.css";
import Profil from "../../assets/img/clients/profil.jpeg"
function Team() {
  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Équipe</h2>
            {/* <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src={Profil}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>ALMOUNADI FILALI AISSAM</h4>
                  <span>
                    Une expérience de plus de 25 ans dans le secteur IT des
                    colaborateurs polyvalent et une offre complète, comprenant
                    la vente, l’intégration et le service
                  </span>
                  <p>
                    Conseil, Audit et un accompagnement dans différents projets
                    IT Contrats de maintenance pluridisciplinaire avec des
                    formules à la carte.
                  </p>
                  <div className="social">
                    <a href="">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src={Profil}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>ALMOUNADI FILALI AISSAM</h4>
                  <span>
                    Une expérience de plus de 25 ans dans le secteur IT des
                    colaborateurs polyvalent et une offre complète, comprenant
                    la vente, l’intégration et le service
                  </span>
                  <p>
                    Conseil, Audit et un accompagnement dans différents projets
                    IT Contrats de maintenance pluridisciplinaire avec des
                    formules à la carte.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
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

export default Team;
