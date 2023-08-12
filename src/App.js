import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [usersArray, setUsersArray] = useState([]);

  const userArrayHandler = (uName, uAge) => {
    setUsersArray((prev) => {
      return [...prev, { username: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userArrayHandler} />
      <UserList userListData={usersArray} />
    </div>
  );
}

export default App;
