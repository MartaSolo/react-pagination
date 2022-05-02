import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { getUsers } from "./api/api";
import { userPerPage } from "./constants";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    getUsers(setUsers);
    setLoading(false);
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / userPerPage));
  }, [users]);

  const handleCurrentPage = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Users users={users} currentPage={currentPage} />
        )}
      </>
      <Pagination
        totalPages={totalPages}
        handleCurrentPage={handleCurrentPage}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
