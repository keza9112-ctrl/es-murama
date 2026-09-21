"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
}

function StatCounter({ target, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div className="flex items-baseline">
        <span className="text-3xl sm:text-[40px] font-black text-[#101a3a] leading-none">
          {count}
        </span>
        {suffix && (
          <span className="text-lg sm:text-2xl font-black text-[#1234d4] ml-0.5">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-[10px] sm:text-[11px] font-extrabold text-[#98a2b3] mt-1.5 uppercase tracking-[1px]">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="py-8 sm:py-12 bg-white relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div
            className="lg:col-span-5 flex justify-center relative py-4 sm:py-6"
            data-aos="fade-right"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full border border-[#1234d4]/15 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 sm:inset-14 rounded-full bg-[#1234d4]/[0.04] border border-[#1234d4]/10" />

              <div className="relative z-10 w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] lg:w-[270px] lg:h-[270px] bg-white rounded-[28px] sm:rounded-[35px] shadow-[0_30px_80px_rgba(18,52,212,0.13)] p-5 sm:p-6 border border-gray-100/90 flex items-center justify-center animate-[logoFloat_5s_ease-in-out_infinite] group">
                <Image
                  src="/images/logo.png"
                  alt="Murama Secondary School Logo"
                  width={210}
                  height={210}
                  className="w-full h-full object-contain"
                  priority
                />
                
                <span className="absolute -right-2 -bottom-2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#1234d4] text-white font-extrabold text-[10px] sm:text-xs tracking-wider flex items-center justify-center shadow-lg shadow-[#1234d4]/30">
                  MSS
                </span>
              </div>

              <div className="absolute top-4 sm:top-10 right-0 bg-white/90 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-[#1234d4]/10 flex flex-col z-20 animate-[bounce_4s_ease-in-out_infinite]">
                <strong className="text-[10px] sm:text-[11px] font-extrabold text-[#1234d4] tracking-wider uppercase">
                  EXCELLENCE
                </strong>
                <span className="text-[9px] sm:text-[10px] text-[#667085] font-medium">
                  Our standard
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-10 left-0 bg-white/90 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-[#1234d4]/10 flex flex-col z-20 animate-[bounce_4.5s_ease-in-out_infinite_1.5s]">
                <strong className="text-[10px] sm:text-[11px] font-extrabold text-[#1234d4] tracking-wider uppercase">
                  EDUCATION
                </strong>
                <span className="text-[9px] sm:text-[10px] text-[#667085] font-medium">
                  Our foundation
                </span>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-7 flex flex-col items-start"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <span className="text-[#1234d4] font-extrabold text-[10px] sm:text-[11px] tracking-[4px] uppercase mb-3 sm:mb-4">
              ABOUT OUR SCHOOL
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-black text-[#101a3a] leading-[1.02] tracking-[-1.5px] sm:tracking-[-3px] mb-5 sm:mb-6">
              Where knowledge becomes{" "}
              <span className="text-[#1234d4]">possibility.</span>
            </h2>

            <p className="text-[#344054] text-base sm:text-lg font-medium leading-relaxed mb-3 sm:mb-4 max-w-[600px]">
              Murama Secondary School is dedicated to creating an environment
              where students develop academically, socially and personally.
            </p>

            <p className="text-[#667085] text-sm sm:text-base leading-[1.8] mb-7 sm:mb-8 max-w-[600px]">
              Through quality teaching, discipline, creativity and a strong
              commitment to education, we prepare young people to confidently
              face the future.
            </p>

            <a
              href="#academics"
              onClick={(e) => handleScroll(e, "#academics")}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#1234d4] text-white font-bold text-[13px] hover:bg-[#0f2bb5] transition-all duration-200 shadow-lg shadow-[#1234d4]/20 hover:-translate-y-1 group w-full sm:w-auto justify-center"
            >
              <span>Explore Our Academics</span>
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="w-full flex items-center justify-between sm:justify-start gap-4 sm:gap-14 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#eaecf0]">
              <StatCounter target={456} label="Students Enrolled" />
              <StatCounter target={82} suffix="%" label="Exam Pass Rate" />
              <StatCounter target={100} suffix="%" label="Commitment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
