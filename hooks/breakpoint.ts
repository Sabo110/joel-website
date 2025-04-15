
import { useState, useEffect } from "react";

type BreakpointType = 'mobile' | 'sm' | 'md' | 'lg';
export function useBreakpoint(): BreakpointType {
  const [breakpoint, setBreakpoint] = useState<BreakpointType>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setBreakpoint('mobile');
      } else if (width >= 640 && width < 768) {
        setBreakpoint('sm');
      } else if (width >= 768 && width < 1024) {
        setBreakpoint('md')
      } else {
        setBreakpoint('lg')
      }
    }

    handleResize(); // call once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
