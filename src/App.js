import React, { Component } from "react";
import LatestPostContainer from "./containers/LatestPostContainer";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Relay Test</h2>
        <Switch>
          <Route exact path="/" component={LatestPostContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
