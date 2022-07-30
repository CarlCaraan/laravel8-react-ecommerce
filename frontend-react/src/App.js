import React, { Component } from "react";
import AppRoute from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    );
  }
}

export default App;
