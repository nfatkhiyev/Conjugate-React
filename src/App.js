import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import AddHw from "./pages/AddHw";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/add_homework">
            <AddHw />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
