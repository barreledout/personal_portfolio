import React from "react";

interface CardProps {
  language: string;
  exp: string;
}

const Cards = ({ language, exp }: CardProps) => {
  return (
    <div
      className="w-[200px] bg-custom-containerColor dark:bg-custom-containerColor/30  items-center rounded-md "
    >
      {/* inner card */}
      <div className="w-[190px] flex relative m-1 items-center">
        {/* Img container */}
        <div className="flex my-1 mr-4 relative w-12 h-12 items-center rounded-sm ">
          <div className=" absolute top-0 left-0 w-12 h-12 p-1 ">
            <img
              src={`/techstack_imgs/${language}.svg`}
              alt={language}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className=" w-[120px] flex flex-col">
          <h1 className="font-[500]">
            {language === "tailwindcss"
              ? "Tailwind CSS"
              : language === "nextjs"
              ? "Next.js"
              : language.charAt(0).toUpperCase() + language.slice(1, language.length)}
          </h1>
          <h1 className="text-[.7em]">Experience: {exp}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
