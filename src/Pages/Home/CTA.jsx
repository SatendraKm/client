import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="p-4 relative flex items-center justify-center">
        <img
          src="/learning-hero.jpg"
          alt="hero"
          className="w-full opacity-50 rounded-md"
        />
        <button
          onClick={() => {navigate("/05_module_c/sectors")}}
          className="bg-black/40 text-white m-2 font-bold text-xl p-4 border-2 border-white shadow-2xl hover:scale-105 absolute rounded-2xl"
        >
          Start Exploring Sectors
        </button>
      </div>
    </section>
  );
};

export default CTA;
