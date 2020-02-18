import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import "./homeAssets/home.css";
import slide1 from "./homeAssets/slide1.jpg";
import slide2 from "./homeAssets/slide2.jpg";
import slide3 from "./homeAssets/slide3.jpg";
import paymentIcon from "./homeAssets/payment.png";
import returnIcon from "./homeAssets/return.png";
import trustIcon from "./homeAssets/trust.png";
import HomeItem from "./HomeItem";
import axios from "axios";
import getProducts from "./repo";
import AppContext from "./AppContext";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts().then(products => this.setState({ products }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Sidebar />
              </div>
              <div className="col-sm-8">
                <div className="card">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="second-section my-5 py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="text-center">
                  <img src={paymentIcon} className="mb-3" alt="paymentIcon" />
                  <div className="">
                    <h4>Paiement sécurisé</h4>
                    <p>
                      Le Lorem Ipsum est simplement du faux texte employé dans
                      la composition et la mise en page avant impression.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center">
                  <img src={returnIcon} className="mb-3" alt="returnIcon" />
                  <div className="">
                    <h4>Retours gratuits</h4>
                    <p>
                      Le Lorem Ipsum est simplement du faux texte employé dans
                      la composition et la mise en page avant impression.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center">
                  <img src={trustIcon} className="mb-3" alt="paymentIcon" />
                  <div className="">
                    <h4>Satisfait ou remboursé</h4>
                    <p>
                      Le Lorem Ipsum est simplement du faux texte employé dans
                      la composition et la mise en page avant impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="container">
            <h4 className="text-uppercase mb-3">meilleures ventes</h4>
            <div className="row">
              {this.context.products.map((product, index) => (
                <HomeItem product={product} key={index} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
Home.contextType = AppContext;
export default Home;
