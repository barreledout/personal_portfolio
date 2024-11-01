"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { TbJetpack } from "react-icons/tb";

const Themebutton: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html")?.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center bg-transparent border-[none] w-[40px] h-[40px] rounded-[10px] cursor-pointer pt-[2px] [transition:all_0.3s_ease] hover:bg-hover-hoverColor"
    >
      {theme === "light" ? (
        <IoMoonOutline className="text-fontColor" style={{ fontSize: "28px" }} />
      ) : (
        <IoSunnyOutline className="text-fontColor" style={{ fontSize: "30px" }} />
      )}
    </button>
  );
};

export default Themebutton;
