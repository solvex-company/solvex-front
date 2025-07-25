import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export interface ILayout {
  children: React.ReactNode;
}

const LayoutTienda: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutTienda;
