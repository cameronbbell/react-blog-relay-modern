import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import Post from "../components/Post";
import PostNotFound from "../components/PostNotFound";

const SpecificPostContainer = (props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query SpecificPostContainerQuery($linkText: String) {
          posts(linkText: $linkText) {
            edges {
              node {
                ...Post
              }
            }
          }
        }`
      }
      variables={{
        linkText: props.match.params.linkText
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          if(props.posts.edges.length === 1) {
              return <Post data={props.posts.edges[0].node} />;
          } else {
            return <PostNotFound />
          }
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default SpecificPostContainer;
