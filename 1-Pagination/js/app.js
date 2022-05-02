import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import { userPerPage } from "./constants";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  console.log("totalPages", totalPages);

  useEffect(() => {
    const getUsers = () => {
      setLoading(true);
      fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          setUsers(response.results);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };
    getUsers();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / userPerPage));
  }, [users]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Users
            users={users}
            currentPage={currentPage}
            userPerPage={userPerPage}
          />
        )}
      </>
      <Pagination totalPages={totalPages} handlePageChange={handlePageChange} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
