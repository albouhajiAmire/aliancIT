import React from "react";
import Img1 from "../../assets/img/svg/details-1.png";
import Img2 from "../../assets/img/svg/details-2.png";
import Img3 from "../../assets/img/svg/details-3.png";
import Img4 from "../../assets/img/svg/details-4.png";

function Details() {
  return (
    <>
      <section id="detailss" className="detailss">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img
                src={Img4}
                className="img-fluid"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                A l'heure où tout le monde peut se vanter, a raison d'être entré
                de plein pied dans l'aire du tous numérique ( smartphone,
                tablette, ordinateur de tous genre ), la question et jusqu'où
                irons nous, sommes-nous assez protéger, ci non comment l'être.
                L'autre point et non des moins importants, comment intégrer tous
                les systèmes les protéger et profiter des synergie naissant de
                cette intégration à fin de gagner en compétitive.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-8 pt-5 order-2 order-md-1"
              data-aos="fade-up"
            >
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Le cloud privé, le cloud public ou le cloud privé-public, la
                question et déjà poser, le cloud tous cours, et déjà présent
                dans nos mœurs ( DROPBOX, .....et autres ), disponibilité,
                partage, "sécurité" son ces principales atouts, reste à le
                maîtriser et à en faire bon usage.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img
                src={Img3}
                className="img-fluid"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>
                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                voluptas
              </h3>
              <p>
                Un bon système et un système avec des procédure normaliser,
                prédéfinies clairs et respecter ( ISO 27001, 14001,..). Reste la
                question d'avoir un bon systèmes normaliser et bien protéger et
                ce suffisant en l'absence d'une garantie de continuité de
                services en l'occurrence, redondance, gestion des sauvegardes et
                sécurité.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-8 pt-5 order-2 order-md-1"
              data-aos="fade-up"
            >
              <h3>
                Quas et necessitatibus eaque impedit ipsum animi consequatur
                incidunt in
              </h3>
              <p className="fst-italic">
                Tous ceci nous ramène à parler des budgets, ces derniers doivent
                respectés les normes en vigueur en terme de ratio tous en
                respectant les priorités du schéma directeur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
