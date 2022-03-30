import React from "react";
import { Link, NavLink} from "react-router-dom";
import logoa from '../../assets/img/morroco.png'
import logof from '../../assets/img/france.png'
import logoe from '../../assets/img/english.png'



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
              <a ><span>Langue</span> <i className="bi bi-chevron-down"></i> </a>
                <ul>
                  <li>
                   <img className="logotranslate" src={logof} alt="frensh" />Francais
                  </li>
                  <li>
                  <img className="logotranslate" src={logoe} alt="frensh" /> Anglais
                  </li>
                  <li>
                  <img className="logotranslate" src={logoa} alt="frensh" /> Arabic
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="">
                  <span>Account</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#" ><i class="fa-solid fa-user-tie"></i>profil</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-star"></i>favourite</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>se deconnecter</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#contact">
                  Contact
                </a>
              </li>
              <li>

                <NavLink to={"/login"} className="getstarted scrollto" >
                  Se connecter
                </NavLink>
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
