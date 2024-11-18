import React from "react";
import Themebutton from "./Themebutton";
import { Email, GitHub } from "./SocialsComp";

const Footer = () => {
  return (
    <footer className="max-w-[650px] my-10">
      <div className="flex justify-between items-center gap-40">
        <div>
          <p className="text-[.9em]">
            &copy; 2024-present Ryan Calisaan. All Rights Reserved.
          </p>
        </div>
        <nav>
          <ul className="list-none flex">
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
