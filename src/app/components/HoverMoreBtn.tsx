import { useState, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface HoverMoreBtnProps {
  title: string;
}

const HoverMoreBtn = ({ title }: HoverMoreBtnProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true)
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      className="group flex items-center gap-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <FaArrowRightLong className={`opacity-0 ${isHovering ? 'group-hover:animate-learnMore' : 'animate-learnMoreExit'}`} />
    </span>
  );
};

export default HoverMoreBtn;
