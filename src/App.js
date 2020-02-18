import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
