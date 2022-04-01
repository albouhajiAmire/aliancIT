import React from "react";
import Suppliers from "./fournisseurs/Suppliers";
import OurJobs from "./métiers/OurJobs";
import ServiceOffer from "./OffreServices/ServiceOffer";
import Team from "./équipe/Team";
import SolutionIt from "./solutionsIT/SolutionIt";
import Contact from "./contact/Contact";
import Features from "./features/Features";
import Count from "./avantage/Count";
import Sécurité from "./SécuritéSystèmed’Information/Sécurité";
import Header from "./header/Header";
import Footer from "./footer/Footer";
function Index() {
  return (
    <>
      <Header />
      <ServiceOffer />
      <main id="main">
        <Suppliers />
        <Count />
        <OurJobs />
        <Sécurité />
        <Team />
        <Contact />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Index;
