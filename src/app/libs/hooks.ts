import { useState, useRef, useEffect, useReducer, use } from "react";

// Intersection Observer Hook
export const useIntersectionObserver = (threshold: number = 1) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (isInView) return;

    // Checks if the element is in the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          } else {
            setIsInView(false);
          }
        });
      },
      // Threshold: How much the element needs to appear in the viewport -
      // before it appears. In this case, threshold: 1 means that the -
      // element needs to appear 100% on the screen.
      { threshold }
    );

    // If we have a targetRef, observe the element.
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up function to stop observing the element.
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isInView]);

  return { targetRef, isInView };
};
