import React from "react";
import ProjectsCards from "./Cards";
import Stack from "./Stack";
import { PageWrapper } from "../FramerMotion/PageWrapper";
import { H1 } from "../TextComps";

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center text-center mt-[5rem] mb-[10rem]"
      id="projects"
    >
      <PageWrapper delayAmt={1.2}>
        <h1 className="text-[2em] font-[400]">Projects</h1>
        <div className="grid grid-cols-2 w-[800px] mt-6 gap-[10px]">
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
    </div>
  );
};

export default Projects;
