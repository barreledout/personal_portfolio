"use client";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";
import Cards from "./TechCards";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from "../Modal";
import H1 from "../H1";
import HoverMoreBtn from "../HoverMoreBtn";

const Techstack = () => {
  const CurrentStack: [string, string][] = [
    ["typescript", "1 month"],
    ["react", "1 month"],
    ["tailwindcss", "1 month"],
    ["nextjs", "1 month"],
  ];

  const OtherStack: [string, string][] = [
    ["python", "1 year"],
    ["javascript", "3 months"],
    ["css", "4 months"],
    ["html", "4 months"],
  ];

  return (
    <motion.div
      variants={variants}
      className="font-[400] text-custom-fontColor w-full"
    >
      <div className="max-w-[650px]">
        {/* possibly create a 'view more' to show more languages I know that popups a modal or new route? */}
        <div className="flex justify-between items-center">
          <H1 className="">Current Tech Stack</H1>
          <Modal
            _ModalTitle="Other Technologies"
            _ModalTrigger={
              <HoverMoreBtn title="View More"/>
            }
          >
            <div className="grid grid-cols-3 items-center gap-2 ">
              {OtherStack.map(([lang, exp], index) => (
                <div key={index}>
                  <Cards language={lang} exp={exp} className="rounded-sm" />
                </div>
              ))}
            </div>
          </Modal>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          {CurrentStack.map(([lang, exp], index) => (
            <div key={index}>
              <Cards language={lang} exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Techstack;

{
  /* <button className="flex items-center gap-2"></button> */
}
