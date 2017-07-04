import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { Link } from "react-router-dom";

const PostLinks = createFragmentContainer(
  ({ data }) => {
    const links = data.map(d =>
      <Link
        to={"/posts/" + d.node.link_text}
        key={`${d.node.link_text}`}
        className="sidebar-link"
      >
        {d.node.title}
      </Link>
    );
    return (
      <div>
        <h5>Recent Posts</h5>
        {links}
        <br />
        <Link to="/posts" className="sidebar-link">More...</Link>
      </div>
    );
  },
  graphql`
    fragment PostLinks on PostEdge @relay(plural: true) {
      node {
        ... on Post {
          title
          link_text
        }
      }
    }
  `
);

export default PostLinks;
