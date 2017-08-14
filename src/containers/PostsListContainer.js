import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import PostList from "../components/PostList";

const PostsListContainer = props => {
  const itemsPerPage = 2;
  const offset = props.match.params.pageNumber
    ? (props.match.params.pageNumber - 1) * itemsPerPage
    : 0;
  const currentPageNumber = Number.parseInt(props.match.params.pageNumber, 10);
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query PostsListContainerQuery($itemsPerPage: Int, $offset: Int) {
          posts(first: $itemsPerPage, offset: $offset) {
            count
            edges {
              ...PostList
            }
          }
        }`}
      variables={{ itemsPerPage: itemsPerPage, offset: offset }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <PostList
              data={props.posts.edges}
              count={props.posts.count}
              itemsPerPage={itemsPerPage}
              currentPageNumber={currentPageNumber}
            />
          );
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default PostsListContainer;
