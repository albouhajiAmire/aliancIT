import React from "react";
import { NavLink } from "react-router-dom";
import background1 from "../assets/img/team/backlogin.jpg";
import Login from "../assets/img/svg/login.svg"
import "../assets/css/login.css";
function SignIn() {
  return (
    <>
      <div className="limiter">
        <div
          className="container-login100 "
          style={{ backgroundImage: `url(${background1})` }}
        >
          <div className="wrap-login100 p-t-190 p-b-30 loginuser">
            <form className="login100-form validate-form">
              <div className="login100-form-avatar mb-3">
                <img src={Login} alt="AVATAR" />
              </div>
              <div
                className="wrap-input100 validate-input m-b-10 mb-4"
                data-validate="Email is required"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Mot de passe"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"></i>
                </span>
              </div>

              <div className="container-login100-form-btn p-t-10 mt-3 mb-3">
                <button className="login100-form-btn">Connexion</button>
              </div>

              <div className="text-center w-full p-t-25 p-b-230">
                <NavLink to={"/forgotpassword"} className="txt1">
                 mot de passe oublié ?
                </NavLink>
              </div>

              <div className="text-center w-full">
                <NavLink to={"/loginup"} className="txt1" href="#">
                Créer un nouveau compte
                  <i className="fa fa-long-arrow-right"></i>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
