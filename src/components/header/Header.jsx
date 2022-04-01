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
                <NavLink to="/information" className="nav-link scrollto" >
                  Information
                </NavLink>
              </li>
       
              <li>
                <NavLink to={""} className="nav-link scrollto" href="/#team">
                  équipe
                </NavLink>
              </li>
              <li className="dropdown">
              <NavLink to={""} ><span>Langue</span> <i className="bi bi-chevron-down"></i> </NavLink>
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
                <NavLink to={""} href="">
                  <span>Articles</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"article"} href="#" >article</NavLink>
                  </li>
                  <li>
                    <NavLink to={"signle"} href="#">articles</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to={""} href="">
                  <span>Archives</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"archive"} ><i class="fa-solid fa-user-tie"></i>Archive</NavLink>
                  </li>
                  </ul>
              </li>
              <li className="dropdown">
                <NavLink to={""} href="">
                  <span>Account</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"profil"} href="#" ><i class="fa-solid fa-user-tie"></i>profil</NavLink>
                  </li>
                  <li>
                    <NavLink to={""} href="#"><i class="fa-solid fa-star"></i>favourite</NavLink>
                  </li>
                  <li>
                    <NavLink to={""} href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>se deconnecter</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={""} className="nav-link scrollto" href="/#contact">
                  Contact
                </NavLink>
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
