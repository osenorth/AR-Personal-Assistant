import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children, footerWithContact = false }) => {
  return (
    <div>
      <title>Ossistant</title>
      <Navbar />
      {children}
      <Footer withContact={footerWithContact} />
    </div>
  );
};

export default Layout;
