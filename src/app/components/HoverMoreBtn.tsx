import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface HoverMoreBtnProps {
  title: string;
  className?: string;
}

const HoverMoreBtn = ({ title, className }: HoverMoreBtnProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true)
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      className={cn(`group flex items-center gap-1 font-[500]`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <FaArrowRightLong className={`opacity-0 ${isHovering ? 'group-hover:animate-learnMore' : 'animate-learnMoreExit'}`} />
    </span>
  );
};

export default HoverMoreBtn;
