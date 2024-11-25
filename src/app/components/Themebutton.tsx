"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSound from "use-sound";
import { Sun, Moon, Loader2 } from "lucide-react";

const Themebutton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [playOn] = useSound("/sound/btnClick3.mp3", { volume: 0.05 });
  const [playOff] = useSound("/sound/btnClick4.mp3", { volume: 0.05 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
      playOn();
    } else {
      setTheme("light");
      playOff();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center bg-transparent border-[none] w-[40px] h-[40px] cursor-pointer outline-none"
    >
      {/* if not mounted, render <Loader2 /> as placeholder. */}
      {!mounted ? (
        <Loader2 className="h-[25px] w-[25px] animate-spin text-custom-fontColor" />
      ) : resolvedTheme === "light" ? (
        <Sun
          className="relative bottom-[2px] text-custom-fontColor transition-all duration-300 ease-in-out pt-[2px] animate-themeIcon hover:text-yellow-500 hover:rotate-[20deg]"
          strokeWidth={"2px"}
          size={"25px"}
        />
      ) : (
        <Moon
          className="text-fontColor transition-all duration-300 ease-in-out animate-themeIcon hover:text-purple-500 hover:rotate-[20deg]"
          strokeWidth={"1.8px"}
          size={"24px"}
        />
      )}
      <span className="sr-only">Theme button</span>
    </button>
  );
};

export default Themebutton;
