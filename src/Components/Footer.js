import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="bg-secondary">
        <div className="container">
          <div className="text-white py-5">
            <div className="row">
              <div className="col-sm-3">
                <div className="">
                  <h5>Nagivation rapide</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-white" to="/cart">
                        Panier
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" to="/whishlist">
                        Liste de souhait
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <h5>Nous contacter</h5>
                <p>
                  <strong>Téléphone:</strong> +33 01 00 00 00 00
                  <br />
                  <strong>Fax:</strong> +33 01 00 00 00 00
                </p>
              </div>
              <div className="col-sm-3">
                <h5>Autres</h5>
                <p>
                  Conditions Générales de Vente
                  <br />
                  Livraison
                </p>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <h5>Réseaux sociaux</h5>
                  <div className="">
                    <Link className="text-white mr-4" to="facebook.com">
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link className="text-white mr-4" to="youtube.com">
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link className="text-white mr-4" to="instagram.com">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="text-white mr-4" to="twitter.com">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="text-white text-center">
              Propulsé par ReactJS - Réalisé par Ali MOHAMED MOUSSA
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
