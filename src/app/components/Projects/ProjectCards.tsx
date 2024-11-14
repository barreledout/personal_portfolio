"use client";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ShadCn/button";

import { Drawer } from "vaul";

interface ProjectProps {
  children: React.ReactNode;
  alt: string;
  img: string;
  link: string;
}

const ProjectsCards = ({ children, img, alt, link }: ProjectProps) => {
  // Used to reference the parent element we want the drawer to appear from
  const ref = useRef<HTMLDivElement>(null);
  // The container that holds the reference to the parent element.
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // If ref is mounted and set to the parent element, the child element (drawer container) will set its reference to the parent element with the ref attribute.
  useEffect(() => {
    if (ref.current) {
      setContainer(ref.current);
    }
  }, []);

  return (
    <div
      className="w-full rounded-md text-black relative overflow-hidden bg-custom-containerColor"
      ref={ref}
    >
      <Drawer.Root container={container} direction="right">
        <Drawer.Trigger className="absolute bottom-0 right-0 p-2 rounded-tl-sm text-custom-fontColor font-[700] bg-custom-containerColor outline-none">
          <span className="m-2 p-2">View Details</span>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="" />
          <Drawer.Content className="bg-red-500 absolute top-0 right-0 h-full w-[50%] rounded-l-[10px] flex flex-col">
            {/* <Drawer.Handle className=""/> */}
            <div className="flex flex-col text-center m-3">
              <Drawer.Title className="">Are you absolutely sure?</Drawer.Title>
              <Drawer.Description>
                This action cannot be undone.
              </Drawer.Description>
            </div>

            <div>
              <Button>Submit</Button>
              <Drawer.Close asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.Close>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Inner container */}
      <div className="flex flex-col m-2">
        {/* Image container */}
        <div className="w-full h-full rounded-tl-md rounded-tr-md">
          <img src="/ProjectImgs/abode.png" alt={alt} className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
