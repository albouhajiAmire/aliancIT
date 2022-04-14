import React, { useState } from "react";
import "../../assets/css/general.css";
import { Create } from "../../services/contact";
function Contact() {
  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comment: "",
  });
  const { firstname, lastname, email, phone, comment } = formData;
  const [stuff, setStuff] = useState({
    errorMessage: "",
    successMessage: "",
    loader: false,
  });
  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

    if (evt.target.name === "email") {
      if (evt.target.value.length <= 5) {
        setInputError({ ...inputError, email: "email is required!" });
      } else if (!evt.target.value.includes("@")) {
        setInputError({
          ...inputError,
          email: "you must enter your correct email",
        });
      } else {
        setInputError({ ...inputError, email: "" });
      }
    } else if (evt.target.name === "firstname") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, firstname: "firstname is required!" });
      } else {
        setInputError({ ...inputError, firstname: "" });
      }
    } else if (evt.target.name === "lastname") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, lastname: "lastname  is required!" });
      } else {
        setInputError({ ...inputError, lastname: "" });
      }
    } else if (evt.target.name === "phone") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, phone: "phone  is required!" });
      } else {
        setInputError({ ...inputError, phone: "" });
      }
    } else if (evt.target.name === "comment") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, comment: "comment is required!" });
      } else {
        setInputError({ ...inputError, comment: "" });
      }
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setStuff({ ...stuff, loader: true });

    for (const input in inputError) {
      if (inputError[input] !== "") {
        alert("still error");
        return;
      }
    }
    Create(formData)
      .then(({ data }) => {
        if (!data.err) {
          setStuff({
            loader: false,
            successMessage: "validate",
            errorMessage: "",
          });
        } else {
          setStuff({
            loader: false,
            successMessage: "",
            errorMessage: data.msg[0],
          });
        }
      })
      .catch((err) => {
        setStuff({
          loader: false,
          successMessage: "",
          errorMessage: "error",
        });
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className=" section-title">
            <h2>Écrivez-nous</h2>
            <p>Contactez-nous et nous vous remercions de votre intéret.</p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  <h4>Lieu :</h4>
                  <p>15 Avenue Al Abtal App N°4 Agdal.Rabat</p>
                </div>

                <div className="email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <h4>E-mail :</h4>
                  <p>alliances.itservices@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <h4>Appel :</h4>
                  <p>+212 661 174 823</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* ----------------------FORM CONTACTS :------------------------------ */}
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                onSubmit={handleSubmit}
                role="form"
                className="react-email-form"
              >
                <div className="row">
                  {stuff.loader && <div>loading...</div>}
                  {stuff.errorMessage && <div>{stuff.errorMessage}</div>}
                  {stuff.successMessage && <div>{stuff.successMessage}</div>}
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Votre nom (*)</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      required
                      value={firstname}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    {inputError.firstname !== "" && (
                      <div>{inputError.firstname}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Votre prénom (*)</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      required
                      value={lastname}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    {inputError.lastname !== "" && (
                      <div>{inputError.lastname}</div>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="name">Votre e-mail (*)</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                      value={email}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    {inputError.email !== "" && <div>{inputError.email}</div>}
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="name">Votre télephone </label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      id="phone"
                      required
                      value={phone}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    {inputError.phone !== "" && <div>{inputError.phone}</div>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Message (*)</label>
                  <textarea
                    className="form-control"
                    name="comment"
                    rows="10"
                    value={comment}
                    onChange={(evt) => handleInputChange(evt)}
                  ></textarea>
                  {inputError.comment !== "" && <div>{inputError.comment}</div>}
                </div>
                {/* -----------------------REPENSE REQUEST MESSAGE -------------------  */}
                <div className="my-3">
                  <div className="loading">
                    {stuff.loader && <div>Chargement...</div>}{" "}
                  </div>
                  <div className="error-message">
                    {stuff.errorMessage && <div>{stuff.errorMessage}</div>}
                  </div>
                  <div className="sent-message">
                    {stuff.successMessage && <div>{stuff.successMessage}</div>}
                    Votre message a été envoyé. Merci!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
