"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Themebutton from "./Themebutton";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroller = () => {
    const offset = window.scrollY;
    if (offset > 0.9) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);
    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  const heroName: string = `<RLC />`;

  return (
    <div
      className={`w-full flex justify-center px-[0] py-[20px] [transition:background-color_0.5s_ease] mx-auto ${
        isSticky
          ? "sticky top-[0] backdrop-filter backdrop-blur-[2px] [transition:background-color_0.3s_ease,_backdrop-filter_0.3s_ease] [mask-image:linear-gradient(360deg,_transparent,_bg-backgroundColor_15%)]"
          : ""
      }`}
    >
      <div className="flex justify-between items-center px-[1rem] py-[1rem] gap-[80px]">
        <div className="relative bottom-[3px] text-[1.5em] font-[700]">
          {heroName}
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-[40px] text-[1.1em] list-none">
            <li className="font-normal bg-transparent rounded-[10px] p-[9px] [transition:background-color_0.3s_ease] hover:bg-hover-hoverColor ">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="font-normal bg-transparent rounded-[10px] p-[9px] [transition:background-color_0.3s_ease] hover:bg-hover-hoverColor">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="font-normal bg-transparent rounded-[10px] p-[9px] [transition:background-color_0.3s_ease] hover:bg-hover-hoverColor">
              <Link href={"/experience"}>Experience</Link>
            </li>
            <li className="font-normal bg-transparent rounded-[10px] p-[9px] [transition:background-color_0.3s_ease] hover:bg-hover-hoverColor">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Themebutton />
      </div>
    </div>
  );
};

export default Navbar;
