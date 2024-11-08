"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import useSound from "use-sound";

import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

const Themebutton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [playOn] = useSound("/sound/btnClick2.mp3", { volume: 1 });
  const [playOff] = useSound("/sound/btnClick1.mp3", { volume: 1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return <IoSunnyOutline className="w-[40px] h-[50px] " />;
    } else if (theme === "light" || "null") {
      return <LuMoon className="w-[40px] h-[40px]" />;
    }
  }

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
      playOn();
    }

    if (resolvedTheme === "dark") {
      setTheme("light");
      playOff();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center bg-transparent border-[none] w-[40px] h-[40px] cursor-pointer"
    >
      {resolvedTheme === "light" ? (
        <LuMoon
          className="text-fontColor [transition:color_0.2s_ease-in-out] hover:text-purple-500"
          style={{ fontSize: "25px" }}
        />
      ) : (
        <IoSunnyOutline
          className="text-custom-fontColor [transition:color_0.2s_ease-in-out] pt-[2px] hover:text-yellow-500"
          style={{ fontSize: "30px" }}
        />
      )}
    </button>
  );
};

export default Themebutton;
