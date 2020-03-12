import React, { Component } from "react";
import "./Homework.css";

class Homework extends Component {
  render() {
    var { Title, Class, Due } = this.props.data;
    return (
      <li className={Title}>
        <h1>{Title}</h1>
        <h2>{Due}</h2>
        <p>{Class}</p>
      </li>
    );
  }
}

export default Homework;
