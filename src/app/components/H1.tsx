import React from "react";
import { cn } from "@/lib/utils";

interface H1Props {
  className: string;
  children: string;
}

const H1 = ({ className, children }: H1Props) => {
  return (
    <h1 className={cn(`text-[1.5em] font-[500] mb-3`, className)}>
      {children}
    </h1>
  );
};

export default H1;
