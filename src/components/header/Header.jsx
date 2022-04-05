import React from "react";
import { NavLink } from "react-router-dom";
import logoa from "../../assets/img/drapo/english.png";
import logof from "../../assets/img/drapo/france.png";
import logoe from "../../assets/img/drapo/morroco.png";

const Header = () => {
  const toggleMenu = (e) => {
    const navbar = e.target.parentElement;
    navbar.classList.toggle("navbar-mobile");
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-xmark");
  };
  const handleDropDown = (e) => {
    if (e.target.tagName === "A") {
      e.target.nextElementSibling.classList.toggle("dropdown-active");
      return;
    }
    e.target.parentElement.nextElementSibling.classList.toggle(
      "dropdown-active"
    );
  };

  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="/">AllianceIt</NavLink>
          </h1>
          {/* <NavLink to={""} href="index.html" className="logo me-auto">
            <img src="" alt="" className="img-fluid" />
          </NavLink> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink className="nav-link scrollto active" to="/">
                  <i className="fas fa-acorn"></i> Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to={""} className="nav-link scrollto" href="/#about">
                  à propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/information" className="nav-link scrollto">
                  Information
                </NavLink>
              </li>

              <li>
                <NavLink to={""} className="nav-link scrollto" href="/#team">
                  équipe
                </NavLink>
              </li>
              <li className="dropdown">
                <a
                  onClick={(e) => {
                    handleDropDown(e);
                  }}
                  href="#"
                >
                  <span>Langue</span>&nbsp; <i className="fa fa-chevron-down"></i>{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <img className="logotranslate" src={logof} alt="frensh" />
                      Francais
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img className="logotranslate" src={logoe} alt="frensh" />{" "}
                      Anglais
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img className="logotranslate" src={logoa} alt="frensh" />{" "}
                      Arabic
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  onClick={(e) => {
                    handleDropDown(e);
                  }}
                  href="#"
                >
                  <span>Articles</span>&nbsp; <i className="fa fa-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to={"/article"}>articles</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/signle"}>article</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  onClick={(e) => {
                    handleDropDown(e);
                  }}
                  href="#"
                >
                  <span>Archives</span>&nbsp;<i className="fa fa-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to={"/archive"}>
                      <i class="fa-solid fa-user-tie"></i>Archive
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  onClick={(e) => {
                    handleDropDown(e);
                  }}
                  href="#"
                >
                  <span>Account</span>&nbsp; <i className="fa fa-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to={"/profil"} href="#">
                      <i class="fa-solid fa-user-tie"></i>profil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/favourite"} href="#">
                      <i class="fa-solid fa-star"></i>favourite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"} href="#">
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>se
                      deconnecter
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/contact"} className="nav-link scrollto" href="/#contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} className="getstarted scrollto">
                  Se connecter
                </NavLink>
              </li>
            </ul>
            {/* <i className="fa fa-list mobile-nav-toggle"></i> */}
            <i
              className="fa-solid fa-bars mobile-nav-toggle"
              onClick={(e) => {
                toggleMenu(e);
              }}
            ></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
