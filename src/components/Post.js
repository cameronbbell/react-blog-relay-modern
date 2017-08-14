import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

const Post = createFragmentContainer(
  ({ data }) => {
    return (
      <div>
        <h2>{data.title}</h2>
        <p>
          Posted by {data.posted_by_user.name} on{" "}
          {new Date(data.created_at).toLocaleString("en-US").split(",")[0]}
        </p>
        <p>{data.body}</p>
      </div>
    );
  },
  graphql`
    fragment Post on Post @relay(plural: false) {
      title
      body
      created_at
      posted_by_user {
        name
      }
    }
  `
);

export default Post;
