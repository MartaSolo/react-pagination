import React from "react";

const Pagination = ({ totalPages, handleCurrentPage }) => {
  const pagesNumbers = [...Array(totalPages).keys()].map(
    (number) => number + 1
  );

  //   const handleClick = (number) => {
  //     if (typeof handleCurrentPageChange === "function") {
  //       handleCurrentPageChange(number);
  //     }
  //   };
  //   console.log("pagesNumbers", pagesNumbers);
  return (
    <div>
      <div>
        {pagesNumbers.map((number) => {
          return (
            <button key={number} onClick={() => handleCurrentPage(number)}>
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
