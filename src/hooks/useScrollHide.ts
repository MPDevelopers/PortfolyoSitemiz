import { useEffect, useState } from 'react';

export function useScrollHide() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Sadece en üstteyken (scrollY = 0) göster
      if (currentScrollY === 0) {
        setIsHidden(false);
      } else {
        // En üstte değilse her zaman gizle
        setIsHidden(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isHidden;
}
