import React, { useEffect, useState } from "react";
import API from "../services/api";

function UserList({ onEdit }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await API.delete(`/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>User List</h3>
      {users.map((u) => (
        <div key={u._id}>
          {u.name} - {u.email}
          <button onClick={() => onEdit(u)}>Edit</button>
          <button onClick={() => deleteUser(u._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;