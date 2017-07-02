import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";

const LatestPostContainer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query LatestPostContainerQuery {
          posts {
            edges {
              node {
                ... on Post {
                  body
                }
              }
            }
          }
        }
        `}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          console.log(props.posts.edges[0].node.body);
          return <div>{props.posts.edges[0].node.body}</div>;
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default LatestPostContainer;
