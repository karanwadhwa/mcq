import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar current={2} length={7} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
