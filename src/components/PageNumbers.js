import React from "react";
import { Link } from "react-router-dom";

const PageList = ({ itemsPerPage, currentPageNumber, count }) => {
  const numPages = count % itemsPerPage === 0
    ? Math.floor(count / itemsPerPage)
    : Math.floor(count / itemsPerPage) + 1;

  let pages = [];
  for (let i = 0; i < numPages; i++) {
    pages[i] = i + 1;
  }

  return (
    <div className="row justify-content-center page-number-container">
      <span className="page-number">Pages: </span>
      {pages.map(i => {
        if (i === currentPageNumber) {
          return (
            <div key={i} className="page-number page-number-active">{i}</div>
          );
        } else {
          return (
            <Link
              key={i}
              to={"/list/" + i}
              className="page-number page-number-inactive underline"
            >
              {i}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default PageList;
