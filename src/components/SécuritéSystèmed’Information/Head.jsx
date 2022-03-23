import React from "react";
import { NavLink } from "react-router-dom";

function Head() {
  return (
    <>
      <section id="clients" className="clients" style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div
              className="col-lg-12 col-md-12 col-12 d-flex justify-content-center "
              style={{ fontSize: "20px" }}
            >
              <NavLink to={"/"}>
                Aliance it <i class="fa fa-terminal" aria-hidden="true"></i>
              </NavLink>{" "}
              Solutions IT :
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
