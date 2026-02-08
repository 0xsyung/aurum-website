// Hook to detect mobile viewport based on a breakpoint.
import * as React from "react";

// Align with design system breakpoints.
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Use undefined initially to avoid hydration mismatches.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Subscribe to viewport width changes.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // Initialize immediately on mount.
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Cast to boolean for stable return type.
  return !!isMobile;
}
