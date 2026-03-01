import React from "react";
import ModuleC from "./ModuleC";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="">
      <ModuleC />
      <div className="absolute bottom-0 p-1 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
