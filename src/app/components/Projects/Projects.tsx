"use client";
import React from "react";
import ProjectsCards from "./ProjectCards";
import H1 from "../H1";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";

const Projects = () => {
  return (
    <motion.div variants={variants} className="w-full mb-20" id="projects">
      <div className="w-[400px] sm:w-[650px]">
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
              LargeScreenDescription: (
                <p>
                  A real estate website inspired by Zillow. Allows users to
                  input their property to receive a price evaluation on their
                  home based on comparable properties nearby.
                </p>
              ),
              SmallScreenDescription: (
                <p>
                  A real estate website that allows users to get a price
                  evaluation of their home.
                </p>
              ),
              stack: [`html`, `css`, `javascript`, `nodejs`],
            }}
          </ProjectsCards>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
