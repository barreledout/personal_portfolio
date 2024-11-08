"use client";
import { useState, useEffect } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LuGithub } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

interface SocialProps {
  IconClassName?: string;
  A_tagClassName?: string;
}

interface ResumeProps {
  href: string;
  EmailClassName?: string;
}

export const GitHub = ({
  IconClassName = "",
  A_tagClassName = "",
}: SocialProps) => {
  return (
    <a
      href="https://github.com/barreledout"
      target="_blank"
      className={`${A_tagClassName}`}
    >
      <LuGithub
        className={`text-[25px] m-2 [transition:all_0.2s_ease-in-out] hover:scale-110 ${IconClassName}`}
      />
    </a>
  );
};

export const Email = ({
  IconClassName = "",
  A_tagClassName = "",
}: SocialProps) => {
  return (
    <a
      href="mailto:rcalisaan7@gmail.com?subject=Hello!&body=Enter Message"
      className={`${A_tagClassName}`}
    >
      <MdAlternateEmail
        className={`text-[25px] m-2 [transition:all_0.2s_ease-in-out] hover:scale-110 ${IconClassName}`}
      />
    </a>
  );
};

export const Resume = ({ href = "", EmailClassName = "" }: ResumeProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);

  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      className={`px-3 py-1 rounded-lg border-[1px] border-[#9CA3AF] flex items-center ${EmailClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Resume {isHover && <LiaLongArrowAltRightSolid className="mt-1 ml-2 " />}{" "}
    </a>
  );
};
