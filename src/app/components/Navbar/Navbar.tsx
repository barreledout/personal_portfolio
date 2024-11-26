"use client";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import Themebutton from "../Themebutton";
import NameLogo from "./NameLogo";

// FOR SCREENS MIN-WIDTH 640PX //
const LargeScreenNavbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  // Sticky navbar functionality
  const handleScroller = () => {
    const offset = window.scrollY;
    if (offset > 0.01) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
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
        isSticky ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between sm:w-[750px] sm:px-[1rem] sm:py-[10px] sm:gap-[200px]">
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

// For mobile devices, turns the navbar to a hamburger menu
const HamburgerMenu = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  // Sticky navbar functionality
  const handleScroller = () => {
    const offset = window.scrollY;
    if (offset > 0.5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
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
    <header
      className={`sticky top-0 w-full flex justify-center z-[1000] px-0 pt-[20px] mx-auto shadow-sm ${
        isSticky ? "backdrop-blur-lg" : ""
      }`}
    >
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
    </header>
  );
};

const Navbar = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const isLargeScreen: boolean = useMediaQuery({ query: "(min-width: 640px)" });

  useEffect(() => {
    setIsHydrated(true); // Ensure rendering happens only after hydration
  }, []);

  // Only render after hydration to avoid mismatches
  if (!isHydrated) return null;

  return <>{isLargeScreen ? <LargeScreenNavbar /> : <HamburgerMenu />}</>;
};

export default Navbar;
