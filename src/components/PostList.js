import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { Link } from "react-router-dom";
import PageNumbers from "./PageNumbers";

const PostList = createFragmentContainer(
  ({ data, count, itemsPerPage, currentPageNumber }) => {
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
        {links}
        <div>
          <PageNumbers
            itemsPerPage={itemsPerPage}
            currentPageNumber={currentPageNumber}
            count={count}
          />
        </div>
      </div>
    );
  },
  graphql`
    fragment PostList on PostEdge @relay(plural: true) {
      node {
        ... on Post {
          title
          created_at
          link_text
          posted_by_user {
            name
          }
        }
      }
    }
  `
);

export default PostList;
