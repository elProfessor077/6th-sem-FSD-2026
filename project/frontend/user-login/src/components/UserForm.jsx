import React, { useState, useEffect } from "react";
import API from "../services/api";

function UserForm({ selectedUser, refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (selectedUser) setForm(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form._id) {
      await API.put(`/${form._id}`, form);
    } else {
      await API.post("/", form);
    }

    setForm({ name: "", email: "", age: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{form._id ? "Update User" : "Add User"}</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;