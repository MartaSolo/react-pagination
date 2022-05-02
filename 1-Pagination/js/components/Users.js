import React from "react";
import User from "./User";
import { userPerPage } from "../constants";

const Users = ({ users, currentPage }) => {
  const startIndex = (currentPage - 1) * userPerPage;
  console.log("currentPage", currentPage);
  console.log("startIndex", startIndex);
  const selectedUsers = users.slice(startIndex, startIndex + userPerPage);

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
