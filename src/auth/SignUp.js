import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import background1 from "../assets/img/team/backlogin.jpg";
import Login from "../assets/img/svg/login.svg";
import "../assets/css/login.css";
import { SignupAuth } from "../services/Auth";
function SignUp() {
  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const [stuff, setStuff] = useState({
    errorMessage: "",
    successMessage: "",
    loader: false,
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { firstname, lastname, email, password, confirmpassword, gender } =
    formData;
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
    } else if (evt.target.name === "password") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, password: "password is required!" });
      } else {
        setInputError({ ...inputError, password: "" });
      }
    } else if (evt.target.name === "confirmpassword") {
      if (evt.target.value.length <= 2) {
        setInputError({
          ...inputError,
          confirmpassword: "confirm password is required!",
        });
      } else {
        setInputError({ ...inputError, confirmpassword: "" });
      }
    } else if (evt.target.name === "gender") {
      if (evt.target.value.length <= 2) {
        setInputError({ ...inputError, gender: "gender is required!" });
      } else {
        setInputError({ ...inputError, gender: "" });
      }
    }
  };
  const Register = (evt) => {
    evt.preventDefault();
    setStuff({ ...stuff, loader: true });

    for (const input in inputError) {
      if (inputError[input] !== "") {
        alert("still error");
        return;
      }
    }
    SignupAuth(formData)
      .then(({ data }) => {
        if (!data.err) {
          setStuff({
            loader: false,
            successMessage: "validate",
            errorMessage: "",
          });
        } else {
          const msg = typeof data.msg === "string" ? data.msg : data.msg[0];
          console.log(typeof data.msg);
          setStuff({
            loader: false,
            successMessage: "",
            errorMessage: msg,
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
    // SignupAuth(formData).then((response) => {
    //   return console.log(response);
    // });
  };
  useEffect(() => {
    if (stuff.successMessage === "validate") {
      alert("succes");
      setStuff({
        ...stuff,
        successMessage: "",
      });
    }
  }, [stuff.successMessage]);

  
  return (
    <>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(${background1})` }}
          //   style="background-image: url('images/img-01.jpg');"
        >
          <div
            className="wrap-login100 p-t-190 p-b-30 "
            style={{ width: "500px" }}
          >
            {stuff.loader && <div>loading...</div>}
            {stuff.errorMessage && <div>{stuff.errorMessage}</div>}
            {stuff.successMessage && <div>{stuff.successMessage}</div>}
            <form className="login100-form validate-form">
              <div className="login100-form-avatar">
                <img src={Login} alt="AVATAR" />
              </div>
              <div className="row">
                <div
                  className="col-6 wrap-input100 validate-input m-b-10 mb-3"
                  data-validate="Username is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="lastname"
                    placeholder="nom "
                    value={lastname}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                  {inputError.lastname !== "" && (
                    <div>{inputError.lastname}</div>
                  )}
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <div
                  className="col-6 wrap-input100 validate-input m-b-10 mb-3"
                  data-validate="Username is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="firstname"
                    placeholder="prénom"
                    value={firstname}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                  {inputError.firstname !== "" && (
                    <div>{inputError.firstname}</div>
                  )}
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  value={email}
                  onChange={(evt) => handleInputChange(evt)}
                />
                {inputError.email !== "" && <div>{inputError.email}</div>}
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10 mb-3 mt-3"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(evt) => handleInputChange(evt)}
                />
                {inputError.password !== "" && <div>{inputError.password}</div>}
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10 mb-3 mt-3"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirmer mot de passe"
                  value={confirmpassword}
                  onChange={(evt) => handleInputChange(evt)}
                />
                {inputError.confirmpassword !== "" && (
                  <div>{inputError.confirmpassword}</div>
                )}
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10 mb-3 mt-3"
                data-validate="Password is required"
              >
                <div className="col-md-6 mb-4">
                  <select
                    className="select"
                    name="gender"
                    value={gender}
                    onChange={(evt) => handleInputChange(evt)}
                  >
                    <option value="1" disabled>
                      Gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                  {inputError.gender !== "" && <div>{inputError.gender}</div>}
                </div>
              </div>
              <div className="container-login100-form-btn mb-3 mt-3">
                <button
                  className="login100-form-btn"
                  onClick={(evt) => Register(evt)}
                >
                  S'inscrire
                </button>
              </div>
              <div className=" w-full p-t-25 p-b-230">
                <NavLink to={"/login"} className="txt1">
                  S'identifier
                </NavLink>
              </div>
              <div className=" w-full p-t-25 p-b-230">
                <NavLink to={"/"} className="txt1">
                  page d'accueil
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
