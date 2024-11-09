"use client";
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
  delayAmt?: number; //In seconds
}

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

export const variants = {
  hidden: { filter: "blur(20px)", transform: "translateY(60%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={wrapperVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
