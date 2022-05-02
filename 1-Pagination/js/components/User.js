import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <hr />
      <p>{`Full name: ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone number: ${user.phone}`}</p>
      <p>{`email adress: ${user.email}`}</p>
    </div>
  );
};

export default User;
