import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logomlm.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="MLM"
            style={{ width: "12em", height: "18em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-7">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                       Início
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Sobre
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                       Textos
                      </Link>
                    </li>
                
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    
                       <li>
                      <Link className="navbar-item" to="/encontros">
                        Encontros
                      </Link>
                    </li>
                   <li>
                      <Link className="navbar-item" to="/contact">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4  py-6 social">
                <a title="facebook" href="https://www.facebook.com/grupodeestudosanarquistasmarialacerdademoura">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
             
                <a title="instagram" href="https://www.instagram.com/grupodeestudosmlm/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
