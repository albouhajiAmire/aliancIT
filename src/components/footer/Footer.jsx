import axios from "axios";
import React ,{useState}from "react";
import "../../assets/css/general.css";
function Footer() {
  const [subscribe, setSubscribe] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`subscribing Name ${subscribe}`);
    const dataToaSubmit = {
      email:subscribe,
    };
    console.log(dataToaSubmit);
    axios.post("http://localhost:3002/v1/api/subscribe/create", dataToaSubmit)
    
  };
  return (
    <>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Rejoignez notre alliances it</h4>
                <p>
                  Bienvenue, votre participation est importante pour nous,
                  merci!
                </p>
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={subscribe}
                    onChange={(e) => setSubscribe(e.target.value)}
                  />
                  <input type="submit" value="S'abonner" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Alliances it</h3>
                <p>
                  <br />
                  15 Avenue Al Abtal App N°4
                  <br />
                  Agdal.Rabat
                  <br />
                  <br />
                  <strong>Telephone :</strong> +212 661 174 823
                  <br />
                  <strong>E-mail :</strong> alliances.itservices@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Liens utiles</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="#">accuille</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="#">Qui sommes-nous</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">développeurs</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Nos services</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Nos réseaux sociaux</h4>
                <p>Nos pages sur les réseaux sociaux</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa-brands fa-skype" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="whatsapp">
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; droits d'auteur
            <strong>
              <span>alliances it</span>
            </strong>
            .Tous les droits sont réservés
          </div>
          <div className="credits">
            développeurs by <a href="#">amine albouhaji & karim manssour</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
