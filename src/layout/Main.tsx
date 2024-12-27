import React from 'react';
import Navbar from "../pages/Navbar/Navbar";
import Footer from '../pages/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
