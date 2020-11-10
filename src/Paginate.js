import React from "react";
import Pagination from "react-js-pagination";

function Paginate({ currentPage, totalRecords, handlePageChange }) {
  //console.log("currentPage", currentPage)
  // total records per page to display
  const recordPerPage = 10;

  // range of pages in paginator
  const pageRange = 10;

  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={currentPage}
      itemsCountPerPage={recordPerPage}
      totalItemsCount={totalRecords}
      pageRangeDisplayed={pageRange}
      onChange={handlePageChange}
    />
  );
}
export default Paginate;
