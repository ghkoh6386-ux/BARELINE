import { useEffect, useState } from 'react';

export default function useIsMobile(mobileBreakpoint) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < mobileBreakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const syncIsMobile = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', syncIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', syncIsMobile);
    };
  }, [mobileBreakpoint]);

  return isMobile;
}
