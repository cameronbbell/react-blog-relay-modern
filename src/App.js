import React, { Component } from "react";
import LatestPostContainer from "./containers/LatestPostContainer";

class App extends Component {
  render() {
    return (
      <div className="">
        <h2>Relay Test</h2>
        <LatestPostContainer />
      </div>
    );
  }
}

export default App;
