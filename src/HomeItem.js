import React, { Component } from "react";

class HomeItem extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-3 mb-4">
        <div className="card p-3">
          <div className="text-center">
            <img src={this.props.product.imageUrl} className="img-fluid" />
          </div>
          <hr />
          <h4 className="card-title">{this.props.product.name}</h4>
          <p className="card-text">{this.props.product.description}</p>
          <h5 className="card-text">
            Prix: <small>€ {this.props.product.price}</small>
            <span className="card-text ml-3">
              <small>Disponible: </small>
              {this.props.product.available_quantity}
            </span>
          </h5>
        </div>
      </div>
    );
  }
}

export default HomeItem;
