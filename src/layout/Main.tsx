import React from 'react';
import Navbar from "../pages/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
