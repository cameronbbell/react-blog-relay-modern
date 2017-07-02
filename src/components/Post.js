import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

const Post = createFragmentContainer(
  ({ data }) => {
    return (<div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>);
  },
  graphql`
    fragment Post on Post @relay(plural: false) {
      title
      body
    }
  `
);

export default Post;
