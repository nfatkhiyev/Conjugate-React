import React, { Component } from "react";

class AddHw extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, 0);
    var dd = String(today.getDate()).padStart(2, 0);
    var yyyy = today.getFullYear();

    this.state = {
      homework_title: "",
      homework_due_date: "" + mm + dd + yyyy,
      class_name: "",
      class_start_time: "",
      class_end_time: "",
      class_building: "",
      class_room_number: ""
    };
  }

  handleChange(varName, event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      [varName]: value
    });
  }
  handleSubmit(event) {
    var params = {
      class_name: this.state.class_name,
      class_start_time: this.state.class_start_time,
      class_end_time: this.state.class_end_time,
      class_building: this.state.class_building,
      class_room_number: this.state.class_room_number,
      homework_title: this.state.homework_title,
      homework_due_date: this.state.homework_due_date
    };

    var json = JSON.stringify(params);

    fetch("https://conjugateapi-conjugate-api.cs.house/homework", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json
    }).then(() => {
      this.props.history.push("/index");
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Homework Title:
          <input
            type="text"
            value={this.state.homework_title}
            onChange={e => this.handleChange("homework_title", e)}
          />
        </label>
        <br />
        <label>
          Homework Due Date:
          <input
            type="number"
            value={this.state.homework_due_date}
            onChange={e => this.handleChange("homework_due_date", e)}
          />
        </label>
        <br />
        <label>
          Class Name:
          <input
            type="text"
            value={this.state.class_name}
            onChange={e => this.handleChange("class_name", e)}
          />
        </label>
        <br />
        <label>
          Class Start Time:
          <input
            type="number"
            value={this.state.class_start_time}
            onChange={e => this.handleChange("class_start_time", e)}
          />
        </label>
        <br />
        <label>
          Class End Time:
          <input
            type="number"
            value={this.state.class_end_time}
            onChange={e => this.handleChange("class_end_time", e)}
          />
        </label>
        <br />
        <label>
          Class Building:
          <input
            type="text"
            value={this.state.class_building}
            onChange={e => this.handleChange("class_building", e)}
          />
        </label>
        <br />
        <label>
          Class Room Number:
          <input
            type="number"
            value={this.state.class_room_number}
            onChange={e => this.handleChange("class_room_number", e)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddHw;
