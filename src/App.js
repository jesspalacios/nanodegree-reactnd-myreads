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
        <Route render={() => (
          <div>
            <h1>Page not found</h1>
            <p>Woops. Looks like this page doesn't exist.</p>
          </div>
        )} />
      </Switch>
    );
  }
}


export default App;
