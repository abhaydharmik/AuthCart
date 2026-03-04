import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
 
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.email || !form.password){
        alert("All fields required")
        return
    }

    login(form)
    navigate("/")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
      <p>{form.email}</p>
      <p>{form.password}</p>
    </>
  );
};

export default Login;
