"use client";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useIntersectionObserver } from "../libs/hooks";

const Hero: React.FC = () => {
  const { targetRef, isInView } = useIntersectionObserver();

  return (
    <div
      className={`flex flex-col justify-center items-center text-center my-[7rem] opacity-0 ${
        isInView ? "animate-[heroPopUp_1s_ease-in-out_forwards] opacity-1" : ""
      }`}
      ref={targetRef}
    >
      <p className="pb-[10px] flex items-center gap-[5px] font-[400]">
        {" "}
        <TiLocationArrowOutline className="text-[20px]" /> Southern California,
        USA
      </p>
      <h1 className=" text-[2em]">
        <span>Hello</span>, I am Ryan!
      </h1>
      <h1 className="pb-[10px] text-[2em]">Full-Stack Web Developer</h1>
      <p className="pb-[10px] font-[400]">Self-taught Programmer</p>
    </div>
  );
};

export default Hero;
