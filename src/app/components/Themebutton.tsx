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
      return <Moon className="w-[40px] h-[40px]" />;
    } else if (theme === "light" || "null") {
      return <Sun className="w-[40px] h-[50px] " />;
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
        <Sun
          className="text-custom-fontColor [transition:all_0.2s_ease-in-out] pt-[2px] animate-themeIcon hover:text-yellow-500 hover:rotate-[20deg]"
          strokeWidth={"2px"}
          size={"25px"}
        />
      ) : (
        <Moon
          className="text-fontColor [transition:all_0.2s_ease-in-out] animate-themeIcon hover:text-purple-500 hover:rotate-[20deg]"
          strokeWidth={"1.8px"}
          size={"24px"}
        />
      )}
    </button>
  );
};

export default Themebutton;
