import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './archive.css'
function ArticleArchive() {
  return (
    <>
    <Header/>
     <article className="container flow ">
        <h1>Our Team</h1>
        <p>Hover or focus over each card to see the person’s job title slide in and the colour treatment change.</p>
        <div className="team">
          <ul className="auto-grid" role="list">
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Anita Simmons</h2>
                <p>Founder</p>
                <img alt="Anita Simmons" src="https://source.unsplash.com/BhcutpohYwg/800x800" />
              </a>
            </li>
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Celina Harris</h2>
                <p>Creative Director</p>
                <img alt="profil shot for Celina Harris" src="https://source.unsplash.com/j5KAuRrYX7g/800x800" />
              </a>
            </li>
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Ruby Morris</h2>
                <p>Technical Lead</p>
                <img alt="profil shot for Ruby Morris" src="https://source.unsplash.com/pQyIutdScOY/800x800" />
              </a>
            </li>
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Nicholas Castro</h2>
                <p>Designer</p>
                <img alt="profil shot for Nicholas Castro" src="https://source.unsplash.com/55JRsxcAiWE/800x800" />
              </a>
            </li>
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Marc Dixon</h2>
                <p>Developer</p>
                <img alt="profil shot for Marc Dixon" src="https://source.unsplash.com/5wn6DeAEcmE/800x800" />
              </a>
            </li>
            <li>
              <a href="https://swop.link/cool" target="_blank&quot;" className="profil">
                <h2 className="profil__name">Chad Chadson</h2>
                <p>Intern</p>
                <img alt="profil shot for Chad" src="https://source.unsplash.com/7jCYw6a2Wao/800x800" />
              </a>
            </li>
          </ul>
        </div>
      </article>
      <Footer/>
    </>
  )
}

export default ArticleArchive