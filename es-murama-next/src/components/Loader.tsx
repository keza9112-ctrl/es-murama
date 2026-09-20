'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        finishLoading();
      }
    };

    const finishLoading = () => {
      setProgress(100);
      setIsLoaded(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 700);
    };

    animationFrameId = requestAnimationFrame(animate);
    const fallbackTimer = setTimeout(finishLoading, 3500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      id="loader"
      className={`fixed inset-0 w-full h-screen z-[9999] bg-white flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${
        isLoaded ? 'opacity-0 invisible pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-[90%] max-w-[500px] text-center flex flex-col items-center">
        
        <div className="relative w-[170px] h-[170px] flex items-center justify-center mb-6 animate-[logoAppear_1.2s_ease_forwards]">
          <div className="absolute w-[160px] h-[160px] rounded-full border-[3px] border-transparent border-t-[#1234d4] border-r-[#1234d4] animate-[rotateRing_2s_linear_infinite]" />
          <Image
            src="/images/logo.png"
            alt="Murama Secondary School Logo"
            width={130}
            height={130}
            className="w-[130px] h-[130px] object-contain relative z-10 animate-[logoFloat_3s_ease-in-out_infinite]"
            priority
          />
        </div>

        <h2 className="text-[#1234d4] text-[26px] sm:text-[30px] font-extrabold tracking-[3px] opacity-0 animate-[textAppear_1s_ease_forwards_0.5s]">
          MURAMA SECONDARY
        </h2>
        <p className="text-[#1234d4] text-[14px] sm:text-[16px] font-semibold tracking-[8px] mt-1.5 opacity-0 animate-[textAppear_1s_ease_forwards_0.7s]">
          SCHOOL
        </p>

        <div className="mt-8 opacity-0 animate-[textAppear_1s_ease_forwards_0.9s] flex items-center gap-2 text-[#1234d4] font-extrabold text-[13px] tracking-[3px]">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
