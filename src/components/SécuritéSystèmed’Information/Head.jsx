import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <>
      <section id="clients" className="clients" style={{ marginTop: "95px" }}>
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div
              className="col-lg-12 col-md-12 col-12 d-flex justify-content-start "
              style={{ fontSize: "15px" }}
            >
              <Link to="/"> Aliance it <i className="fa fa-terminal" aria-hidden="true"></i>
              </Link>&nbsp;	Solutions IT :
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
