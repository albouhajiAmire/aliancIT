import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
function Profil() {
  return (
    <>
    <Header/>
      <>
        <div className="container pagetitle" style={{ marginTop: "10%" }}>
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to={"/"}>accueil</NavLink>
              </li>
              <li className="breadcrumb-item">utilisateurs</li>
              <li className="breadcrumb-item active">profil</li>
            </ol>
          </nav>
        </div>
        <section className="container section profile">
          <div className="row">
            <div className="col-xl-12">
              <div className="card ">
                <div className="card-body cardptf pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Aperçu
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                      modification le profil
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                       Changer le mot de passe
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">Environ</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <h5 className="card-title">Détails du profil :</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                        Nom et prénom
                        </div>
                        <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Emploi :</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">USA</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address :</div>
                        <div className="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Téléphone :</div>
                        <div className="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">E-mail :</div>
                        <div className="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>
                    </div>
{/* -------------------------------------------------------------------------------- */}
                    <div
                      className="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      <form>
                        <div className="row mb-3">
                          <label
                            for="profileImage"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Image de profil :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <img className="avatar-edit" src={"https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"} alt="Profile" />
                            <div className="pt-2">
                              <a
                              
                                className="btn btn-upload  btn-sm"
                                title="Upload new profile image"
                              >
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                              </a> &nbsp;&nbsp;&nbsp;
                              <a
                                href="#"
                                className="btn btn-remove  btn-sm "
                                title="Remove my profile image"
                              >
                                <i className="fa-solid fa-trash-can"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="fullName"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Nom & prénom :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              value="Kevin Anderson"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            for="email"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            E-mail :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="email"
                              value="Kevin@email.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            for="about"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            environ :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              // style="height: 100px"
                              style={{ height: "100px" }}
                            >
                              Sunt est soluta temporibus accusantium neque nam
                              maiores cumque temporibus. Tempora libero non est
                              unde veniam est qui dolor. Ut sunt iure rerum quae
                              quisquam autem eveniet perspiciatis odit. Fuga
                              sequi sed ea saepe at unde.
                            </textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="company"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Compagnie :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              className="form-control"
                              id="company"
                              value="Lueilwitz, Wisoky and Leuschke"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Job"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Emploi :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="job"
                              type="text"
                              className="form-control"
                              id="Job"
                              value="Web Designer"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Address"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Adresse :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="address"
                              type="text"
                              className="form-control"
                              id="Address"
                              value="A108 Adam Street, New York, NY 535022"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Phone"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Téléphoner :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="Phone"
                              value="(436) 486-3538 x29071"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Twitter"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Twitter Profil
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="twitter"
                              type="text"
                              className="form-control"
                              id="Twitter"
                              value="https://twitter.com/#"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Facebook"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Facebook Profil
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="facebook"
                              type="text"
                              className="form-control"
                              id="Facebook"
                              value="https://facebook.com/#"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Instagram"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Instagram Profil
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="instagram"
                              type="text"
                              className="form-control"
                              id="Instagram"
                              value="https://instagram.com/#"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="Linkedin"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                            Linkedin Profil
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="linkedin"
                              type="text"
                              className="form-control"
                              id="Linkedin"
                              value="https://linkedin.com/#"
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                          Sauvegarder les modifications
                          </button>
                        </div>
                      </form>
                    </div>

       {/*------------ ------------------------------------------------------- */}
                    <div
                      className="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      <form>
                        <div className="row mb-3">
                          <label
                            for="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                          Mot de passe actuel :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="newPassword"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                           nouveau mot de passe :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            for="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label label"
                          >
                          Ré-entrez le nouveau mot de passe :
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                          Changer le mot de passe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Profil;
