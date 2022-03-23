import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/general.css";function Header() {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Aliance It</a>
          </h1>
          {/* <a href="index.html" className="logo me-auto">
            <img src="" alt="" className="img-fluid" />
          </a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                <i className="fas fa-acorn"></i> Accueil
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  à propos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Service
                </a>
              </li>
              <li>
                <NavLink to={"/information"} className="nav-link   scrollto" href="#portfolio">
                  Information
                </NavLink>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  équipe
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Langue</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Francais</a>
                  </li>
                  {/* <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="#">Anglais</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                  <li>
                    <a href="#">Espane</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Se connecter
                </a>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
            <i className="fa-solid fa-bars mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
