import React, { useEffect, useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []);

  const ToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`p-4 `}>
      <h1 className="text-4xl">Settings</h1>
      <ul>
        <li>
          <p className="mt-5 text-xl">current theme: {theme}</p>
          <button
            className="border-2 m-4 p-2 rounded-lg shadow-md"
            onClick={() => {
              ToggleTheme();
            }}
          >
            change theme
          </button>
        </li>
        <li className="flex">
          <p className="mt-5 text-xl">clear your data</p>
          <button
            className="border-2 border-red-500 text-red-500 m-4 p-2 rounded-lg shadow-md"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Clear
          </button>
        </li>
        <li>
          <h1 className="mt-5 text-xl">About</h1>
          <p className="text-gray-500">
            SkillConnect is a platform where you can explore various
            opportunities accross different skill-sets. New Opportunity is
            posted frequently so that you can stay updated as soon as any new
            opportunity arrives.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
