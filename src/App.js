import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
   Route, 
  Switch
} from "react-router-dom";
import Mainpage from "./Components/Pages/Mainpage";
import Searchpage from "./Components/Pages/Searchpage";
import NotFound from "./Components/Pages/NotFound";


class App extends Component {
  render() {
    return <Router>
        <div>
     

        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/search" component={Searchpage} />
          <Route render={() => (
            <div>
              <h1>Page not found</h1>
              <p>Woops. Looks like this page doesn't exist.</p>
            </div>
          )} />
          <Route component={NotFound} />
        </Switch>

        </div>
      </Router>;
  }

}


export default App;
