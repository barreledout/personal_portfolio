"use client";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
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
      className="relative bottom-[2px] flex justify-center items-center bg-transparent border-[none] w-[40px] h-[40px] rounded-[10px] cursor-pointer pt-[2px] [transition:all_0.3s_ease] hover:bg-hover-hoverColor"
    >
      {theme === "light" ? (
        <IoMoon className="text-indigo-600" style={{ fontSize: "30px" }} />
      ) : (
        <IoIosSunny className="text-yellow-400" style={{ fontSize: "30px" }} />
      )}
    </button>
  );
};

export default Themebutton;
