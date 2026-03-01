import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2>AuthCart</h2>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
