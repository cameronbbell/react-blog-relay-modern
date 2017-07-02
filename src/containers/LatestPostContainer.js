import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import Post from "../components/Post";

const LatestPostContainer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query LatestPostContainerQuery {
          posts {
            edges {
              node {
                ...Post
              }
            }
          }
        }
        `}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <Post data={props.posts.edges[0].node} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default LatestPostContainer;
