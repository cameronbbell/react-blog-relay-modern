import React, { Component } from "react";
import LatestPostContainer from "./containers/LatestPostContainer";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row top-spacer">
            <div className="col-2">
              <div className="card">
                <div className="card-block">
                  <p>Recent Posts</p>
                </div>
              </div>
              <div className="card top-spacer">
                <div className="card-block">
                  <p>About me</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-block">
                  <Switch>
                    <Route exact path="/" component={LatestPostContainer} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
