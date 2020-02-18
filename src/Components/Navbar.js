import React, { Component } from "react";
import "./index.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
          <div className="container">
            <div className="row w-100">
              <div className="col-sm-2"></div>
              <div className="col-sm-2"></div>
              <div className="col-sm-8 ">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarcontent"
                  aria-expanded="false"
                >
                  <i className="header-icon fas fa-bars" />
                </button>
                <div className="w-100">
                  <div
                    className="row collapse navbar-collapse float-right"
                    id="navbarcontent"
                  >
                    <div className="col-xs-4">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="header-text"
                          data-toggle="dropdown"
                          data-offset="20,10"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-inline-flex">
                            <div className="icon-wrap">
                              <i className="header-icon fas fa-user" />
                            </div>
                            <div className="text-wrap">
                              <div>Login</div>
                              <i className="fas fa-caret-down" />
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <form className="px-4 py-3">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-group">
                              <label>Mot de passe</label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Mot de passe"
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Se connecter
                            </button>
                          </form>
                          <hr />
                          <a href="#" className="dropdown-item">
                            Pas encore de compte? Créer un compte
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <a href="#" className="header-text">
                        <div className="d-inline-flex">
                          <div className="icon-wrap">
                            <i className="header-icon fas fa-shopping-cart" />
                          </div>
                          <div className="text-wrap">
                            <span className="small round badge badge-secondary">
                              0
                            </span>
                            <div>Panier</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-xs-4">
                      <a href="#" className="header-text">
                        <div className="d-inline-flex">
                          <div className="icon-wrap">
                            <i className="header-icon fas fa-heart" />
                          </div>
                          <div className="text-wrap">
                            <span className="small round badge badge-secondary">
                              1
                            </span>
                            <div></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
