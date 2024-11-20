"use client";
import { TiLocationArrowOutline } from "react-icons/ti";
import H1 from "./H1";
import { GitHub, Email, Resume } from "./SocialsComp";
import { motion } from "framer-motion";
import { variants } from "./FramerMotion/PageWrapper";
import { GeistSans } from "geist/font/sans";

const Hero: React.FC = () => {
  return (
    <motion.div variants={variants} className="">
      <div className="mt-[4rem] p mx-auto items-center w-full max-w-[650px]">
        <div className="inline-flex gap-5 items-center">
          <img
            src="/heroPic.jpeg"
            alt="Profile Picture"
            className="object-cover rounded-[50%] w-[105px] h-[105px]"
          />
          <div>
            <h1 className="text-[1.5em] text-custom-fontColor font-[500]">
              Ryan Calisaan
            </h1>
            <p className={`text-[1.2em] font-[300] ${GeistSans.className}`}>
              Full Stack Developer
            </p>
            <span className="flex relative">
              <TiLocationArrowOutline className="absolute bottom-[4] left-[-2px] text-[1.2em]" />
              <span
                className={`ml-[20px] text-[1em] font-[300] ${GeistSans.className}`}
              >
                Southern California, USA
              </span>
            </span>
          </div>
        </div>
        <div className="mt-[2rem] flex flex-col ">
          <H1 className="mb-1.5">About Me</H1>
          {/* Make a better bio */}
          <p
            className={`text-pretty font-[300] text-[1.1em] ${GeistSans.className}`}
          >
            I am self-taught programmer interested in full stack web development
            with{" "}
            <span className="font-[500] text-blue-300">
              zero work experience
            </span>
            . The goal of this website is to not only showcase my projects.{" "}
          </p>
          <div className="w-full">
            <div className="inline-flex items-center gap-3 pt-2 ">
              <GitHub IconClassName="text-custom-fontColor/80 dark:text-[#9CA3AF] dark:hover:text-hover-textHoverWhite/80 ml-[-1px]" />
              <Email IconClassName="text-custom-fontColor/80 text-[27px] dark:text-[#9CA3AF] dark:hover:text-hover-textHoverWhite/80 ml-[-1px]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
