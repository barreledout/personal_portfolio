"use client";
import React from "react";
import ProjectsCards from "./ProjectCards";
import H1 from "../H1";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";

const CurrentProjects: string[] = ["abode"];

const Projects = () => {
  return (
    <motion.div variants={variants} className="w-full mb-20">
      <div className="flex justify-between items-center gap-2">
        <H1 className="">Current Projects</H1>
      </div>
      <div className="flex flex-col items-center gap-10 w-full">
        <ProjectsCards
          alt="abode"
          img="/ProjectImgs/abode.png"
          gitHubLink="https://github.com/barreledout"
        >
          {{
            description: (
              <p>
                A real estate website inspired by Zillow. Allows users to input
                their property to receive a price evaluation on their home based
                on comparable properties nearby.
              </p>
            ),
            stack: (
              <p>poop</p>
            ),
          }}
        </ProjectsCards>
      </div>
    </motion.div>
  );
};

export default Projects;
