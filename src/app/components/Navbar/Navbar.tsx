"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import Themebutton from "../Themebutton";
import NameLogo from "./NameLogo";

// Adds sticky navbar functionality
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      className={`sticky top-0 w-full flex justify-center z-[1000] px-0 pt-[20px] mx-auto transition-all ${
        isSticky
          ? "backdrop-filter backdrop-blur-md transition-[background-color,backdrop-filter] duration-300 mask-image-[linear-gradient(360deg,_transparent,_rgba(0,0,0,0.15)_15%)]"
          : ""
      }`}
    >
      <div className="flex w-[750px] justify-between px-[1rem] py-[10px] gap-[200px]">
        <NameLogo />

        <nav className={`flex gap-3 ${GeistSans.className} `}>
          <ul className="flex justify-center items-center gap-[20px] text-[1.1em] list-none">
            {["projects", "experience", "contact"].map((item) => (
              <li key={item} className="font-[500]">
                <a
                  href={`${
                    item === "contact"
                      ? "mailto:rcalisaan7@gmail.com?subject=Hello!&body=Enter Message"
                      : `#${item}`
                  }`}
                  className="hover:text-custom-navbarHoverColor dark:hover:text-blue-300"
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
