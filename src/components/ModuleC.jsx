import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MyPlan from "../Pages/MyPlan/MyPlan";
import Sectors from "../Pages/Sectors/Sectors";
import JobDetail from "../Pages/Sectors/JobDetail";
import Settings from "../Pages/Settings/Settings";

const ModuleC = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/:id" element={<JobDetail />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default ModuleC;
