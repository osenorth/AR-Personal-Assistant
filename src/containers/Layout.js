import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <title>Ossistant</title>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
