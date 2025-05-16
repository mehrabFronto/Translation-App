import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-200 min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
