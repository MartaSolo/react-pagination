import React from "react";

const Pagination = ({ totalPages, handlePageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div>
      <div>
        {pageNumbers.map((number) => {
          return (
            <button key={number} onClick={() => handlePageChange(number)}>
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
