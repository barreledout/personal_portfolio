"use client";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { variants } from "./FramerMotion/PageWrapper";

const Techstack = () => {
  const stack: [string, string][] = [
    ["typescript", "1 month"],
    ["react", "1 month"],
    ["tailwindcss", "1 month"],
    ["nextjs", "1 month"],
  ];

  return (
    <motion.div variants={variants} className="font-[400]">
      {/* possibly create a 'view more' to show more languages I know that popups a modal or new route? */}
      <h1 className="text-[1.4em] font-[500] py-5">Current Tech Stack</h1>

      <ul className="grid grid-cols-4 items-center justify-between ">
        {stack.map(([lang, exp], index) => (
          <HoverCard key={index}>
            <HoverCardTrigger className="">
              <div className="flex items-center gap-2 w-[150px] bg-slate-400">
                <img
                  src={`/techstack_imgs/${lang}.svg`}
                  alt={lang}
                  className="w-12 h-12 object-contain my-auto"
                />
                <p>
                  {lang === "tailwindcss"
                    ? "Tailwind CSS"
                    : lang === "nextjs"
                    ? "Next.js"
                    : lang.charAt(0).toUpperCase() + lang.slice(1, lang.length)}
                </p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>Experience: {exp}</HoverCardContent>
          </HoverCard>
        ))}
      </ul>
    </motion.div>
  );
};

export default Techstack;
