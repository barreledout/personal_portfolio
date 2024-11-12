"use client";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";
import Cards from "./ProjectCards";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ShadCn/dialog";

const Techstack = () => {
  const CurrentStack: [string, string][] = [
    ["typescript", "1 month"],
    ["react", "1 month"],
    ["tailwindcss", "1 month"],
    ["nextjs", "1 month"],
  ];

  const OtherStack: [string, string][] = [];

  return (
    <motion.div
      variants={variants}
      className="font-[400] text-custom-fontColor"
    >
      {/* possibly create a 'view more' to show more languages I know that popups a modal or new route? */}
      <div className="flex justify-between items-center relative">
        <h1 className="text-[1.4em] font-[500] py-5">Current Tech Stack</h1>
        <Dialog>
          <DialogTrigger className="flex items-center gap-2 ">
            View More <FaArrowRightLong />
          </DialogTrigger>
          <DialogContent className="flex flex-col justify-center bg-custom-containerColor text-custom-fontColor dark:border-0 ">
            <DialogHeader>
              <DialogTitle className="text-center">
                Other Technologies
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-3"></div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-3 items-center gap-2">
        {CurrentStack.map(([lang, exp], index) => (
          <div key={index}>
            <Cards language={lang} exp={exp} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Techstack;

{
  /* <button className="flex items-center gap-2"></button> */
}
