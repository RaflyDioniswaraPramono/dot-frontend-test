import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import SubNavbar from "../SubNavbar/SubNavbar";
import Discount from "../Discount/Discount";
import { ILayoutProps } from "@/interfaces/components.interface";
import Footer from "../Footer/Footer";
import React from "react";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <div className="py-4 mb-3">
        <Navbar />
      </div>
      <div className="mb-6 flex justify-center items-center w-full">
        <Banner />
      </div>
      <div className="mb-12">
        <SubNavbar />
      </div>
      <div className="mb-12">
        <main>{children}</main>
      </div>
      <div className="mb-12">
        <Discount />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
