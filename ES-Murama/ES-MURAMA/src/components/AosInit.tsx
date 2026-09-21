'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return null;
}
