import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AppContext from "./AppContext";
import getProducts from "./repo";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts().then(products => {
      this.setState({ products });
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default Routes;
