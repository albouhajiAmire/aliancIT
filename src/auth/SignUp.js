import React from "react";
import { NavLink } from "react-router-dom";
import background1 from "../assets/img/backlogin.jpg";
import "../assets/css/login.css";
function SignUp() {
  return (
    <>
      <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(${background1})` }}
          //   style="background-image: url('images/img-01.jpg');"
        >
          <div className="wrap-login100 p-t-190 p-b-30 " style={{ width: "500px"}}>
            <form className="login100-form validate-form">
              <div className="login100-form-avatar">
                <img src={""} alt="AVATAR" />
              </div>
              <div className="row">
              <div
                className="col-6 wrap-input100 validate-input m-b-10 mb-3"
                data-validate="Username is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
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
                  name="username"
                  placeholder="Username"
                />
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
                  placeholder="Email"
                />
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
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <div className="container-login100-form-btn mb-3 mt-3">
                <button className="login100-form-btn">
                Register
                </button>
              </div>
              <div className="text-center w-full p-t-25 p-b-230">
                <NavLink to={"/login"} className="txt1">
                  Sign in
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
