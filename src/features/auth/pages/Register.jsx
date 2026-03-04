import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    alert("Registered successfully");
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <h2>Register</h2>

      <input type="text" name="name" value={form.name} placeholder="Enter name" onChange={handleChange} />

      <input type="email"  name="email" value={form.email} placeholder="Enter email" onChange={handleChange} />

      <input
        type="password"
         name="password"
         value={form.password}
        placeholder="Enter password"
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
