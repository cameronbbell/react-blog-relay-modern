import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./createRelayEnvironment";

class App extends Component {
  render() {
    return (
      <div className="">
        <h2>Relay Test</h2>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query AppQuery {
              node(id:"posts:1") {
                ... on Post {
                  body
                }
              }
            }`}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props.node.body);
              return <div>{props.node.body}</div>
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
