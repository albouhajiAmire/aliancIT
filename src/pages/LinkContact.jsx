import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../components/contact/Contact'

function LinkContact() {
  return (
    <>
    <div className="container pagetitle" >
          <h1>Contact :</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to={"/"}>accueil</NavLink>
              </li>
              <li className="breadcrumb-item">utilisateurs</li>
              <li className="breadcrumb-item active">Contactez-nous</li>
            </ol>
          </nav>
    </div>
    <Contact/>
    </>
  )
}

export default LinkContact