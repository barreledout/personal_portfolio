import React from "react";
import { UnderlineLogo } from "../SVGcolor";

const NameLogo = () => {
  return (
    <a href={"#"} className="relative">
      <div className="select-none">
        <h1 className="text-[1.4em] font-[700] relative ">Calisaan</h1>
        <div className="absolute top-[7px] left-[-15px] z-[-1]">
          <UnderlineLogo />
        </div>
      </div>
    </a>
  );
};

export default NameLogo;
