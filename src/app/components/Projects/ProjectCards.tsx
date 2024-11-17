"use client";
import { useRef, useState, useEffect, SyntheticEvent } from "react";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";
import { FaArrowRightLong } from "react-icons/fa6";

interface ProjectProps {
  children: {
    description: React.ReactNode;
    stack?: string[];
  };
  alt: string;
  img: string;
  gitHubLink: string;
  demoLink?: string;
}

const ProjectsCards = ({
  children,
  img,
  alt,
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
      className="w-full rounded-md text-black relative overflow-hidden border-[1px] dark:border-custom-borderColor/10 dark:[box-shadow:inset_0_5px_10px_rgba(154,160,185,.05),inset_0_15px_40px_rgba(166,173,201,.02)] "
      ref={ref}
    >
      {" "}
      <Drawer.Root container={container} direction="right" handleOnly={true}>
        <Drawer.Trigger
          className=" m-2 p-[2px] rounded-sm text-custom-fontColor font-[700] outline-none cursor-pointer"
          onClick={handleDrawer}
        >
          <span className="group flex items-center gap-1">
            Learn More
            <FaArrowRightLong className="opacity-0 group-hover:animate-learnMore" />
          </span>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content
            className="absolute z-10 top-0 right-0 h-full w-[50%] rounded-l-[10px] flex flex-col bg-custom-drawerColor/100 dark:bg-custom-drawerColor dark:text-custom-fontColor"
            ref={drawerRef}
          >
            <div className="flex flex-col text-center m-3">
              <Drawer.Title className="text-left font-[700] text-[2em] ">
                {title(alt)}
              </Drawer.Title>
              <Drawer.Description
                className="text-left font-[500] dark:text-custom-accentFontColor/80"
                asChild
              >
                {children.description}
              </Drawer.Description>
              <div className=" mt-4 w-full text-left">
                <h2 className="font-[500] text-[1.1em]">Technologies Used:</h2>
                <div className="mt-3">
                  <ul className="flex">
                    {children.stack?.map((node, index) => (
                      <li key={index} className="list-none items-center">
                        <span className="font-[500] text-center text-[.9em]  p-[5px] rounded-sm  ">
                          {node}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center absolute bottom-0 m-auto w-full">
              <div className="flex gap-2 mb-2">
                <a
                  className="cursor-pointer border rounded-sm p-1"
                  href={gitHubLink}
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="cursor-pointer border rounded-sm p-1"
                  href={demoLink}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      {/* Inner container */}
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
    </div>
  );
};

export default ProjectsCards;
