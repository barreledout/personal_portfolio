"use client";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target)
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isInView]);

  return (
    <div
      className={`flex flex-col justify-center items-center text-center my-[7rem] ${
        isInView ? "animate-[heroPopUp_1s_ease-in-out]" : ""
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
