import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (credentials) => {
    const fakeUser = {
      email: credentials.email,
      token: "12345",
      role: credentials.email === "admin@gmail.com" ? "admin" : "user"
    };

    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
