import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import PostLinks from "../components/PostLinks";

const RecentPostsContainer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RecentPostsContainerQuery {
          posts(first: 5) {
            edges {
              ...PostLinks
            }
          }
        }`}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <PostLinks data={props.posts.edges} />
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default RecentPostsContainer;
