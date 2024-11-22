"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import { useTheme } from "next-themes";
import Themebutton from "./Themebutton";
import { UnderlineLogo } from "./SVGcolor";

// Adds sticky navbar functionality
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleScroller = () => {
    const offset = window.scrollY;
    if (offset > 0.01) {
      setIsSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);
    // Prevents constant listening of 'scroll'.
    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  return (
    // Makes the navbar sticky if scrolled down
    <header
      className={`sticky top-[0] w-full flex justify-center z-[1000] px-[0] pt-[20px] [transition:background-color_0.5s_ease] mx-auto  ${
        isSticky
          ? "backdrop-filter backdrop-blur-[8px] [transition:background-color_0.3s_ease,_backdrop-filter_0.3s_ease] [mask-image:linear-gradient(360deg,_transparent,_bg-backgroundColor_15%)] "
          : ""
      }`}
    >
      <div className="flex w-[750px] justify-between px-[1rem] py-[10px] gap-[200px]">
        <a href={"#"} className="relative">
          <div className="select-none">
            <h1 className="text-[1.4em] font-[700] relative ">Calisaan</h1>
            <div className="absolute top-[8px] left-[-15px] z-[-1]">
              <UnderlineLogo theme={resolvedTheme || "light"} />
            </div>
          </div>
        </a>

        <nav className={`flex gap-3 ${GeistSans.className}`}>
          <ul className="flex justify-center items-center gap-[20px] text-[1.1em] list-none">
            {["projects", "experience", "contact"].map((item) => (
              <li key={item} className="font-[500]">
                <a
                  href={`#${item}`}
                  className="hover:text-custom-navbarHoverColor dark:hover:text-blue-300 [transition:color_0.14s_ease-in-out]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <Themebutton />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
