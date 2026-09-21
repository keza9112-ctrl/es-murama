'use client';

import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-8 right-8 z-[900] w-12 h-12 rounded-full bg-[#1234d4] text-white font-bold text-xl shadow-xl shadow-[#1234d4]/30 hover:bg-[#0f2bb5] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
