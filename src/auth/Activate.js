import React from "react";
import './style.css'
function Activate() {
  return (
    <>
   <section className="login">
      <div className="container">
      <div className="activation__wrapper">
        <div className="activation__container">
          <div className="activation__header">
            <img
              className="activation__logo"
              src="http://hortonworks.com/wp-content/uploads/2013/10/Fusionex-Logo-New.png"
            />
          </div>
          <div className="activation__subject">Fusionex GIANT Activation Link</div>
          <div className="activation__arrow"></div>
          <div className="activation__message">
            <div>
              {" "}
              Dear, <span className="activation__user">Somebody</span>
              <br />
              Thank you for choosing Fusionex GIANT.
            </div>
          </div>
          <div className="activation__link">
            <div>Click on the following link to activate your account:</div>
            <div
              href="https://giant2016-csgb.fusionexsite.com/AnalyticsI/Login/"
              className="activation__btn"
            >
              Activate your account here
            </div>
          </div>
          <div className="activation__footer">
            Thank you. Sincerely,
            <br /> Fusionex GIANT Support Team
            <br />
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}

export default Activate;
