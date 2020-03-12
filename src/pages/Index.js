import React, { Component } from "react";

//import "./index.css";
import Panels from "../components/Panels";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div classname="App-header">
          <h2>Conjugate!</h2>
        </div>
        <Panels />
      </div>
    );
  }
}
export default Index;
