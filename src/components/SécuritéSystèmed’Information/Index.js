import React from "react";
import Description from "./Description";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import System from "./System";
import Details from "./Details";
import Information from "./Information";
import Hero3 from "./Hero3";
import Clients from "./Clients";
function Index() {
  return (
    <>
      <Header />
      <System />
      <Hero3/>
      <Details />
      <Description />
      <Information />
      <Clients/>
      <Footer />
    </>
  );
}

export default Index;
