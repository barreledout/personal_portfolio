"use client";
import { useRef, useState, useEffect, SyntheticEvent } from "react";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";
import HoverMoreBtn from "../HoverMoreBtn";
import { GeistSans } from "geist/font/sans";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  children: {
    description: React.ReactNode;
    stack?: string[];
  };
  alt: string;
  img: string;
  status: string;
  gitHubLink: string;
  demoLink?: string;
}

const ProjectsCards = ({
  children,
  img,
  alt,
  status,
  gitHubLink,
  demoLink,
}: ProjectProps) => {
  // Used to reference the parent element we want the drawer to appear from
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Set the container reference when parent ref mounts
  useEffect(() => {
    if (ref.current) {
      setContainer(ref.current);
    }
  }, []);

  // Handle drawer toggle when the button is clicked
  const handleDrawer = (e: SyntheticEvent) => {
    setIsOpen(true);
  };

  // Function to handle clicks outside the drawer
  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setIsOpen(false); // Close the drawer if the click is outside
    }
  };

  // Function to handles when the ESC key is clicked
  const handleEscPressed = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside the drawer or ESC is pressed when it is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscPressed);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPressed);
    }

    // Cleanup the event listener when the component unmounts or drawer closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPressed);
    };
  }, [isOpen]);

  const title = (alt: string) => {
    return alt.charAt(0).toUpperCase() + alt.slice(1);
  };

  return (
    <div
      className="w-full rounded-md text-black relative overflow-hidden border-[1px] dark:border-custom-borderColor/10" //dark:[box-shadow:inset_0_5px_10px_rgba(154,160,185,.05),inset_0_15px_40px_rgba(166,173,201,.02)]
      ref={ref}
    >
      {" "}
      <Drawer.Root container={container} direction="right" handleOnly={true}>
        <div className="w-full relative flex items-center">
          <Drawer.Trigger
            className=" m-2 p-[2px] text-custom-fontColor outline-none cursor-pointer w-[110px]"
            onClick={handleDrawer}
          >
            <HoverMoreBtn
              title="Learn More"
              className={`${GeistSans.className}`}
            />
          </Drawer.Trigger>
          <span
            className={`absolute right-5 text-custom-fontColor ${GeistSans.className}`}
          ></span>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content
            className="absolute z-10 top-0 right-0 h-full w-[50%] rounded-l-lg flex flex-col bg-custom-gradient-light dark:bg-custom-gradient-dark dark:text-custom-fontColor overflow-hidden group"
            ref={drawerRef}
          >
            <div className="flex flex-col text-center m-3">
              <Drawer.Title className="text-left font-[700] text-[2em] ">
                {title(alt)}
              </Drawer.Title>
              <Drawer.Description
                className={`text-left ${GeistSans.className} font-[300] dark:text-custom-accentFontColor`}
                asChild
              >
                {children.description}
              </Drawer.Description>
              <div className="mt-4 w-full text-left">
                <h2 className="font-[600] text-[1.1em]">Built With:</h2>
                <div className="mt-3">
                  <ul className="flex relative w-full">
                    <li
                      className={`w-11 rounded-sm absolute top-0 rotate-[-4deg] [transition:all_0.1s_ease-in-out] group-hover:rotate-0`}
                    >
                      <div
                        className={`w-10 h-10 p-[5px] bg-red-200/20 rounded-lg relative`}
                      >
                        <img
                          src="/techstack_imgs/html.svg"
                          alt="HTML"
                          className="w-full h-full"
                          title="HTML"
                        />
                      </div>
                    </li>

                    <li
                      className={`w-11 rounded-sm absolute top-0 left-5 rotate-[1deg] [transition:all_0.1s_ease-in-out] group-hover:rotate-0 group-hover:translate-x-[28px]`}
                    >
                      <div className="w-10 h-10 p-[5px] bg-red-200/20 rounded-lg">
                        <img
                          src="/techstack_imgs/css.svg"
                          alt="CSS"
                          className="w-full h-full"
                          title="CSS"
                        />
                      </div>
                    </li>

                    <li
                      className={`w-11 rounded-sm absolute top-0 left-10 rotate-4 [transition:all_0.1s_ease-in-out] group-hover:rotate-0 group-hover:translate-x-[56px]`}
                    >
                      <div className="w-10 h-10 p-1 bg-red-200/20 rounded-lg">
                        <img
                          src="/techstack_imgs/javascript.svg"
                          alt="Javascript"
                          className="w-full h-full rounded-sm"
                          title="Javascript"
                        />
                      </div>
                    </li>

                    <li
                      className={`w-11 rounded-sm absolute top-0 left-16 rotate-3 [transition:all_0.1s_ease-in-out] group-hover:rotate-0 group-hover:translate-x-20`}
                    >
                      <div className="w-10 h-10 p-[5px] bg-red-200/20 rounded-lg">
                        <img
                          src="/techstack_imgs/nodejs.svg"
                          alt="Node.js"
                          className="w-full h-full rounded-sm"
                          title="Node.js"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center absolute bottom-0 m-auto w-full">
              <div className="flex gap-2 mb-3 relative">
                <a
                  className="cursor-pointer rounded-sm p-1 dark:bg-black/10"
                  href={gitHubLink}
                  target="_blank"
                >
                  <div className="w-[80px]">
                    <div className="flex items-center">
                      <div>
                        <FaGithub className=""/>
                      </div>
                      <span className={`${GeistSans.className} relative top-[1px]`}>Source</span>
                    </div>
                  </div>
                </a>
                <a
                  className="cursor-pointer rounded-sm p-1 dark:bg-black/10"
                  href={demoLink}
                >
                  <div className="w-[80px]">
                    <div className="flex items-center ">
                      <div>
                        <Globe size={"17px"}/>
                      </div>
                      <span className={`${GeistSans.className} relative right-[9px] top-[1px]`}>Visit</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      {/* Inner container */}
      <a href="https://github.com/barreledout" target="_blank">
        <div className="flex flex-col m-2 z-[-10]">
          {/* Image container */}
          <div className="w-full h-full rounded-tl-md rounded-tr-md">
            <img
              src={img}
              alt={`${title(alt)} Project`}
              className={`rounded-md ${isOpen ? "blur-[1px]" : ""}`}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCards;
