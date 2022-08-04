import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import background1 from "../assets/img/team/backlogin.jpg";
import Login from "../assets/img/svg/login.svg";
import "../assets/css/login.css";
import { LoginAuth } from "../services/Auth";
function SignIn() {
  const navigate = useNavigate();
  const {userEmail} = useParams();
  
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const {email,password} = loginData;
  const handleInputChange = (evt) => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
  }
  const Register = (evt) => {
    evt.preventDefault();
    LoginAuth(loginData);
    navigate.push("/profil")
  }
  return (
    <>
      <div className="limiter">
        {/* <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p> */}
        <div
          className="container-login100 "
          style={{ backgroundImage: `url(${background1})` }}
        >
          <div className="wrap-login100 p-t-190 p-b-30 loginuser">
            <form
              className="login100-form validate-form"
              onSubmit={Register}
            >
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
                  value={email}
                  onChange={(evt) => handleInputChange(evt)}
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
                  name="password"
                  placeholder="Mot de passe"
                  value={password}
                      onChange={(evt) => handleInputChange(evt)}
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
                  mot de passe oublié?
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
