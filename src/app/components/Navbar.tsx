"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Themebutton from "./Themebutton";

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

  const heroName: string = ``;

  return (
    // Makes the navbar sticky if scrolled down
    <div
      className={`sticky top-[0] w-full flex justify-center z-[1000] px-[0] py-[20px] [transition:background-color_0.5s_ease] mx-auto ${
        isSticky
          ? "backdrop-filter backdrop-blur-[2px] [transition:background-color_0.3s_ease,_backdrop-filter_0.3s_ease] [mask-image:linear-gradient(360deg,_transparent,_bg-backgroundColor_15%)] "
          : ""
      }`}
    >
      <div className="flex justify-between items-center px-[1rem] py-[1rem] gap-[80px]">
        <div className="relative bottom-[3px] text-[2em] font-[500] ">
          <Link href={"/"}>RC</Link>
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-[40px] text-[1.1em] list-none">
            {["about", "projects", "experience", "contact"].map((item) => (
              <li
                key={item}
                className="font-[200] bg-transparent rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-hover-hoverColor"
              >
                <Link href={`/${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Themebutton />
      </div>
    </div>
  );
};

export default Navbar;
