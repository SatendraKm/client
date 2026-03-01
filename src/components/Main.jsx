import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("05_module_c")
  }
  return (
    <div>
      <p className="text-xl m-4">
        click the button below to navigate to Module C
      </p>
      <button onClick={handleNavigate} className="m-4 mt-2 p-4 border-2 rounded-lg shadow">
        Click here
      </button>
    </div>
  );
};

export default Main;
