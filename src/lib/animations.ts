
import { useEffect, useState } from 'react';

// Hook for revealing elements when they enter the viewport
export const useInView = (options = {}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isInView };
};

// Hook for page transition animations
export const usePageTransition = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    // Set entering to true on mount
    setIsEntering(true);
    
    // Remove entering state after animation
    const enterTimeout = setTimeout(() => {
      setIsEntering(false);
    }, 500); // Match your animation duration

    return () => {
      clearTimeout(enterTimeout);
      setIsExiting(true);
    };
  }, []);

  return { isExiting, isEntering };
};

// Utility function to add delay to animations
export const staggerChildren = (selector: string, baseDelay = 0.05) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (element instanceof HTMLElement) {
      element.style.animationDelay = `${baseDelay * index}s`;
    }
  });
};
