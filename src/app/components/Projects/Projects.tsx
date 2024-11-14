"use client";
import React from "react";
import ProjectsCards from "./ProjectCards";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/PageWrapper";

const CurrentProjects: string[] = ["abode"];

const Projects = () => {
  return (
    <motion.div variants={variants} className="w-full mb-20">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-[1.5em] font-[500] mb-2">Current Projects</h1>
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
          }}
        </ProjectsCards>
      </div>
    </motion.div>
  );
};

export default Projects;

{
  /* <div
      className="flex flex-col justify-center text-center mt-[5rem] mb-[10rem]"
      id="projects"
    >
      <PageWrapper delayAmt={1.2}>
        <h1 className="text-[2em] font-[400]">Projects</h1>
        <div className="grid grid-cols-2 mt-6 gap-[10px]">
        <ProjectsCards
            img="/ProjectImgs/Screenshot 2024-11-03 180118.png"
            alt="Abode"
            link="https://github.com/barreledout"
          >
            <H1>Abode</H1>
            <Stack stack={["html", "css", "javascript", "nodejs"]} />
          </ProjectsCards>

          <ProjectsCards
            img="/ProjectImgs/Screenshot 2024-11-03 180118.png"
            alt="Abode"
            link="https://github.com/barreledout"
          >
            <H1>Abode</H1>
          </ProjectsCards>
        </div>
      </PageWrapper>
    </div> */
}
