import React from "react";
import Themebutton from "./Themebutton";
import { Email, GitHub } from "./SocialsComp";

const Footer = () => {
  return (
    <footer className="w-[400px] sm:w-[650px] my-10">
      <div className="flex flex-col justify-between items-center sm:gap-40 sm:flex-row">
        <div>
          <p className="text-xs text-nowrap  sm:text-[.9em]">
            &copy; 2024-present Ryan Calisaan. All Rights Reserved.
          </p>
        </div>
        <nav className="">
          <ul className="list-none flex pt-1 sm:pt-0">
            <li>
              <Themebutton />
            </li>
            <li>
              <Email />
            </li>
            <li>
              <GitHub />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
