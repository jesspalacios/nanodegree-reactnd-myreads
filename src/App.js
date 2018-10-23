import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./Components/Pages/Mainpage";
import Searchpage from "./Components/Pages/Searchpage";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/search" component={Searchpage} />
      </Switch>
    );
  }
}


export default App;
