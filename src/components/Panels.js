import React, { Component } from "react";
import Homework from "./Homework";
//import "./Panel.css";

class Panels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchHomeworkData();
  }

  fetchHomeworkData() {
    fetch("https://https://conjugateapi-conjugate-api.cs.house/homework")
      .then(response => {
        return response.json();
      })
      .then(jsonresponse => {
        let wanted = ["homework"];
        let result = jsonresponse.filter(homework =>
          wanted.includes(homework.homeworks_id)
        );
        this.setState({ date: result });
      });
  }

  render() {
    var panels = this.state.data.map(homework => (
      <Homework data={homework} key={homework.homeworks_id} />
    ));
    return (
      <div classname="panel-container">
        <ul classname="panel">{panels}</ul>
      </div>
    );
  }
}

export default Panels;
