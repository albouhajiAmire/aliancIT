import React from "react";
import { Link} from "react-router-dom";



const Header = () => {

  const toggleMenu = (e) => {
    const navbar = e.target.parentElement
    navbar.classList.toggle('navbar-mobile')

    e.target.classList.toggle('fa-bars')
    e.target.classList.toggle('fa-xmark')

  }

  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto">
            <Link to="/">Aliance It</Link>
          </h1>
          {/* <a href="index.html" className="logo me-auto">
            <img src="" alt="" className="img-fluid" />
          </a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                <i className="fas fa-acorn"></i> Accueil
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#about">
                  à propos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#services">
                  Service
                </a>
              </li>
              <li>
                <Link to="/information" className="nav-link scrollto" >
                  Information
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#team">
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
                <a className="nav-link scrollto" href="/#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="/#about">
                  Se connecter
                </a>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
            <i className="fa-solid fa-bars mobile-nav-toggle" onClick={(e) => {toggleMenu(e)}}></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
