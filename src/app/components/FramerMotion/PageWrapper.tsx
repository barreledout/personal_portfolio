"use client";
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
  delayAmt: number //In seconds
}

export const PageWrapper = ({ children, delayAmt }: PageWrapperProps) => {
  return (
  <>
    <AnimatePresence>
        <motion.div
            initial={{opacity: 0, y:15}}
            animate={{opacity: 1, y:0}}
            exit={{opacity: 0, y:15}}
            transition={{delay: delayAmt}}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  </>
  );
};

