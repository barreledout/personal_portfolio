import { useState, useRef, useEffect } from "react";

// Intersection Observer Hook
export const useIntersectionObserver = (
  threshold: number = 1,
  triggerOnce: boolean = false
) => {
  //Element to be observed
  const targetRef = useRef<HTMLDivElement>(null);

  // Checks if the targetRef is in view or not.
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    // If the element is already in view, don't setup the observer.
    if (isInView) return;

    // Set up the Intersection Observer if the element is in the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.unobserve(entry.target); //Stop observing once it is in view
            }
          } else {
            if (!triggerOnce) {
              setIsInView(false);
            }
          }
        });
      },

      // Threshold: How much the element needs to appear in the viewport -
      // to required to trigger the observer. In this case, threshold: 1 means that the -
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
  }, [threshold, triggerOnce]); // useEffect re-runs when the threshold of the element changes or if the triggerOnce argument is set to false.

  return { targetRef, isInView };
};
