"use client";
import { motion, useDragControls } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";
import Cards from "./ProjectCards";

const Techstack = () => {
  const stack: [string, string][] = [
    ["typescript", "1 month"],
    ["react", "1 month"],
    ["tailwindcss", "1 month"],
    ["nextjs", "1 month"],
  ];

  return (
    <motion.div
      variants={variants}
      className="font-[400] text-custom-fontColor"
    >
      {/* possibly create a 'view more' to show more languages I know that popups a modal or new route? */}
      <h1 className="text-[1.4em] font-[500] py-5">Current Tech Stack</h1>

      <div className="grid grid-cols-3 items-center gap-2">
        {stack.map(([lang, exp], index) => (
          <div key={index}>
            <Cards language={lang} exp={exp} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Techstack;
