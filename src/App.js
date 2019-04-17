import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar current={2} length={7} />
        </div>
      </div>
    );
  }
}

export default App;
