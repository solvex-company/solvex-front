import React from "react";
import NavbarAuth from "./components/NavbarAuth/NavbarAuth";
import Footer from "@/app/components/Footer/Footer";

export interface ILayout {
  children: React.ReactNode;
}

const LayoutAuth: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className="flex h-[calc(100vh-116px)]">
        <div className="h-full w-[250px]">
          <NavbarAuth />
        </div>
        <div className="w-full h-[calc(100vh-116px)] overflow-y-auto p-6 pl-12 pr-12">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutAuth;
