import React from "react";
import { useNavigate } from "react-router-dom";

const Sectors = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-8">
        List of Sectors that we work upon
      </h1>
      <ul className="grid grid-cols-2 gap-6 mt-10">
        <li
          onClick={() => {
            navigate("1");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Information Technology</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
        <li
          onClick={() => {
            navigate("2");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Construction</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
        <li
          onClick={() => {
            navigate("3");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Tourisn & Hospitality</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
        <li
          onClick={() => {
            navigate("4");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Media and Entertainment</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
        <li
          onClick={() => {
            navigate("5");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Apparel & Fashion</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
        <li
          onClick={() => {
            navigate("6");
          }}
          className="border p-4  shadow-sm rounded-lg"
        >
          <h1 className="text-lg">Healthcare</h1>
          <p className="text-gray-400 mt-2">
            This is a short description of the sector
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sectors;
