import React from 'react'
import Footer from './footer/Footer'
import Suppliers from './fournisseurs/Suppliers'
import About from './propos/About'
import Header from './header/Header'
import OurJobs from './métiers/OurJobs'
import ServiceOffer from './OffreServices/ServiceOffer'
import Team from './équipe/Team'
import SolutionIt from './solutionsIT/SolutionIt'
import Contact from './contact/Contact'
import Features from './features/Features'
import Count from './avantage/Count'
import Sécurité from './SécuritéSystèmed’Information/Sécurité'
import Information from './SécuritéSystèmed’Information/Information'
function Index() {
  return (
    <>
    <ServiceOffer/>  
    
    <main id="main">
      <Suppliers/>
      <Count/>
      <OurJobs/>
      <Team/>
      <SolutionIt/>
      <Sécurité/>
      <Contact/>
      <Features/>
    </main>
    
    </>
  )
}

export default Index