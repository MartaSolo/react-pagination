import React from "react";
import User from "./User";

const Users = ({ users, currentPage, userPerPage }) => {
  const startIndex = (currentPage - 1) * userPerPage;
  const endIndex = currentPage * userPerPage;
  const selectedUsers = users.slice(startIndex, endIndex);

  console.log("currentPage", currentPage);
  console.log("startIndex", startIndex);
  console.log("selectedUsers", selectedUsers);

  return (
    <div>
      {selectedUsers.map((user) => {
        return <User key={user.login.uuid} user={user} />;
      })}
    </div>
  );
};

export default Users;
