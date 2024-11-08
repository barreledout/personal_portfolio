"use client";
import { TiLocationArrowOutline } from "react-icons/ti";
import { GitHub, Email, Resume } from "./SocialsComp";
import { PageWrapper } from "./FramerMotion/PageWrapper";
import { motion } from "framer-motion";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const Hero: React.FC = () => {
  return (
    <div className="mt-[4rem] pb-[50px] mx-auto w-[650px] items-center">
      <PageWrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="inline-flex gap-5 items-center"
        >
          <img
            src="/heroPic.jpeg"
            alt="Profile Picture"
            className="object-cover rounded-[50%] w-[105px] h-[105px]"
          />
          <div>
            <h1 className="text-[1.4em] font-[700]">Ryan Calisaan</h1>
            <p className="text-[1.2em] font-[500]">Full Stack Developer</p>
            <span className="flex relative">
              <TiLocationArrowOutline className="absolute bottom-[4] left-[-2px] text-[1.2em]" />
              <span className="ml-[20px] text-[1em] font-[300]">
                Southern California, USA
              </span>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mt-[2rem] flex flex-col "
        >
          <h1 className="text-[1.2em] pb-[5px] font-[500] border-b-transparent relative after:content=[''] after:absolute after:top-7 after:left-0 after:border-b after:border-[#9CA3AF] after:w-[85px] ">
            About Me
          </h1>

          {/* Make a better bio */}
          <p className="text-pretty font-[200] text-[1.1em]">
            I am self-taught programmer interested in full stack web development
            with{" "}
            <span className="font-[700] text-blue-300">
              zero work experience
            </span>
            . The goal of this website is to not only showcase my projects.{" "}
          </p>
        </motion.div>
        <div className="inline-flex items-center gap-3 pt-2 ">
          <GitHub IconClassName="text-[#9CA3AF] hover:text-hover-textHoverWhite/80 ml-[-1px]" />
          <Email IconClassName="text-[#9CA3AF] text-[27px] hover:text-hover-textHoverWhite/80 ml-[-1px]" />
          <Resume href="" EmailClassName="" />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Hero;
