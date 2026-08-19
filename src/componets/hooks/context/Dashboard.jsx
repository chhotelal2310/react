import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Note the curly braces

const Dashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <h1>Dashboard</h1>
      <h1>Theme is : {theme}</h1>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="py-2 px-4 border border-black rounded-lg"
      >
        Theme Button
      </button>
    </div>
  );
};

export default Dashboard;