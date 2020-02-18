import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="card p-5">
          <h5>CATEGORIES</h5>
          <ul className="list-unstyled p-0 m-0">
            <li>
              <Link to="/mode">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-tshirt"></i>
                  </div>
                  <div className="text-wrap">Mode</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/maison">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-home"></i>
                  </div>
                  <div className="text-wrap">Maison</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/telephones">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-mobile-alt"></i>
                  </div>
                  <div className="text-wrap">Téléphones & Tablettes</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/ordinateurs">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-laptop"></i>
                  </div>
                  <div className="text-wrap">Ordinateurs</div>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/electronique">
                <div className="d-inline-flex">
                  <div className="icon-wrap">
                    <i className="header-icon fas fa-tv"></i>
                  </div>
                  <div className="text-wrap">Electronique</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
