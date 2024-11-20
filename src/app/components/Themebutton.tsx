"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import useSound from "use-sound";

import { Sun, Moon } from "lucide-react";


const Themebutton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [playOn] = useSound("/sound/btnClick3.mp3", { volume: 0.05 });
  const [playOff] = useSound("/sound/btnClick4.mp3", { volume: 0.05 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return <Sun className="w-[40px] h-[50px] " />;
    } else if (theme === "light" || "null") {
      return <Moon className="w-[40px] h-[40px]" />;
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
      className="flex justify-center items-center bg-transparent border-[none] w-[40px] h-[40px] cursor-pointer outline-none"
    >
      {resolvedTheme === "light" ? (
        <Moon
          className="text-fontColor [transition:color_0.2s_ease-in-out] hover:text-purple-500"
          strokeWidth={"1.8px"}
          size={"24px"}
        />
      ) : (
        <Sun
          className="text-custom-fontColor [transition:color_0.2s_ease-in-out] pt-[2px] hover:text-yellow-500"
          strokeWidth={"2px"}
          size={"25px"}
        />
      )}
    </button>
  );
};

export default Themebutton;
