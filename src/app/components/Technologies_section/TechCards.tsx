import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  language: string;
  exp: string;
  className?: string;
}

const Cards = ({ language, exp, className, ...props }: CardProps) => {
  return (
    <div className="sm:w-[200px] bg-custom-containerColor hover:bg-neutral-400/30 dark:bg-custom-containerColor/30 dark:hover:bg-gray-400/10 items-center rounded-md ">
      {/* inner card */}
      <div className="sm:w-[190px] flex relative m-1 items-center">
        {/* Img container */}
        <div className="flex my-1 mr-4 relative w-12 h-12 items-center rounded-sm ">
          <div className=" absolute top-0 left-0 w-12 h-12 p-1 ">
            <img
              src={`/techstack_imgs/${language}.svg`}
              alt={language}
              className={cn("w-full h-full", className)}
              {...props}
            />
          </div>
        </div>
        <div className=" w-[120px] flex flex-col">
          <h1 className="font-[500]">
            {language === "tailwindcss"
              ? "Tailwind CSS"
              : language === "nextjs"
              ? "Next.js"
              : language.length <= 4
              ? language.toUpperCase()
              : language.charAt(0).toUpperCase() + //Makes the first letter uppercase and joins the rest of the string together.
                language.slice(1, language.length)}
          </h1>
          <h1 className="text-[.7em]">Experience: {exp}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
