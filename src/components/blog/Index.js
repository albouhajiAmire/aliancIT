import React from "react";
import Pagination from "../../controle/pagination/Pagination";
import Footer from "../footer/Footer";
import Article from "./articles/Article";
import "../../assets/css/main.css"
function Index() {
  return (
    <>
      <section style={{ marginTop: "5%" }}>
        <div className="container">
          <Article />
          <Pagination />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Index;
