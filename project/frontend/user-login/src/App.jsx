import React, { useState } from "react";
import UserForm from "./components/UserForm.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
    setSelectedUser(null);
  };

  return (
    <div>
      <h2>User CRUD App</h2>

      <UserForm selectedUser={selectedUser} refresh={refresh} />

      <UserList
        key={reload}   // forces reload
        onEdit={(user) => setSelectedUser(user)}
      />
    </div>
  );
}

export default App;