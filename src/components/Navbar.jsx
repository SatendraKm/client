import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");
  return (
    <div className="justify-center items-center border-2 bg-white border-gray-400 rounded-xl shadow-lg m-4 p-2 z-50">
      <ul className="flex items-center justify-center text-center">
        <li
          onClick={() => {
            navigate("/05_module_c");
          }}
          className="p-1 items-center justify-center flex-1"
        >
          <img
            src="/icon_home.svg"
            alt="home icon"
            className="h-8 w-8 mx-auto"
          />
          <p className="text-md font-semibold">Home</p>
        </li>
        <li
          onClick={() => {
            navigate("/05_module_c/sectors");
          }}
          className="p-1 items-center justify-center flex-1"
        >
          <img
            src="/icon_sectors.png"
            alt="home icon"
            className="h-8 w-8 mx-auto"
          />
          <p className="text-md font-semibold">Sectors</p>
        </li>
        <li
          onClick={() => {
            navigate("/05_module_c/myplan");
          }}
          className="p-1 items-center justify-center flex-1"
        >
          <img
            src="/icon_plan.png"
            alt="home icon"
            className="h-8 w-8 mx-auto"
          />
          <p className="text-md font-semibold">My Plan</p>
        </li>
        <li
          onClick={() => {
            navigate("/05_module_c/settings");
          }}
          className="p-1 items-center justify-center flex-1"
        >
          <img
            src="/icon_settings.png"
            alt="home icon"
            className="h-8 w-8 mx-auto"
          />
          <p className="text-md font-semibold">Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
