"use client";

import Image from "next/image";

export default function Hero() {
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[86vh] pt-35  flex flex-col justify-center items-center overflow-hidden bg-white"
    >
      
      <div className="absolute -top-16 -right-16 w-[550px] h-[550px] rounded-full bg-[#1234d4]/[0.07] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        <div
          className="lg:col-span-7 flex flex-col items-start text-left"
          data-aos="fade-right"
        >
          
          <div className="inline-block px-3.5 py-1.5 mb-5 rounded-full text-[#1234d4] bg-[#edf2fe] border border-[#1234d4]/20 text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase shadow-xs">
            WELCOME TO OUR SCHOOL
          </div>

          <h1 className="text-[#0d172a] text-4xl sm:text-6xl lg:text-[84px] font-extrabold leading-[0.95] tracking-[-2px] sm:tracking-[-3px] mb-2 sm:mb-3">
            MURAMA
          </h1>
          <h2 className="text-[#1234d4] text-xl sm:text-3xl lg:text-[46px] font-extrabold tracking-[0.5px] uppercase leading-tight mb-5 sm:mb-6">
            SECONDARY SCHOOL
          </h2>

          <p className="text-[#64748b] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-[540px] mb-7 sm:mb-8">
            Inspiring young minds through{" "}
            <strong className="text-[#1234d4] font-extrabold">
              knowledge, discipline
            </strong>{" "}
            and excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
            <a
              href="#about"
              onClick={(e) => handleScrollClick(e, "#about")}
              className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 rounded-2xl bg-[#1234d4] text-white text-[14px] sm:text-[15px] font-bold tracking-wide shadow-lg shadow-[#1234d4]/30 hover:bg-[#0f2bb5] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Discover Our School
              <span className="text-lg">→</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-2xl bg-white text-[#1234d4] text-[14px] sm:text-[15px] font-bold tracking-wide border-2 border-blue-100 hover:border-[#1234d4] transition-all duration-200 shadow-xs"
            >
              Contact Us
            </a>
          </div>

          <div className="w-full flex items-center justify-between sm:justify-start gap-6 sm:gap-10 pt-2 border-t border-gray-100 sm:border-t-0">
            <div>
              <strong className="block text-xs font-black text-[#1234d4] mb-0.5 sm:mb-1">
                01
              </strong>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                Excellence
              </span>
            </div>
            <div>
              <strong className="block text-xs font-black text-[#1234d4] mb-0.5 sm:mb-1">
                02
              </strong>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                Discipline
              </span>
            </div>
            <div>
              <strong className="block text-xs font-black text-[#1234d4] mb-0.5 sm:mb-1">
                03
              </strong>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                Knowledge
              </span>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-8"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#1234d4]/10 via-[#1234d4]/5 to-transparent blur-2xl scale-95" />

            <div className="absolute inset-0 rounded-full border border-dashed border-[#1234d4]/30 animate-[spin_32s_linear_infinite]" />

            <div className="absolute inset-8 sm:inset-10 rounded-full border border-[#1234d4]/20" />

            <div className="relative z-10 w-[190px] h-[190px] sm:w-[250px] sm:h-[250px] lg:w-[310px] lg:h-[310px] bg-white rounded-[32px] sm:rounded-[44px] shadow-[0_20px_50px_rgba(18,52,212,0.12)] p-5 sm:p-8 border border-gray-100 flex flex-col items-center justify-center animate-[logoFloat_3.5s_ease-in-out_infinite] group">
              <Image
                src="/images/logo.png"
                alt="Murama Secondary School Logo"
                width={250}
                height={250}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="absolute top-6 sm:top-16 right-0 bg-white/95 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(18,52,212,0.1)] border border-gray-100 flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#334155] animate-[bounce_4s_ease-in-out_infinite] z-20">
              <span className="text-[#1234d4]">✦</span>
              Excellence
            </div>

            <div className="absolute bottom-6 sm:bottom-16 left-0 bg-white/95 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(18,52,212,0.1)] border border-gray-100 flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#334155] animate-[bounce_4.5s_ease-in-out_infinite_0.5s] z-20">
              <span className="text-[#1234d4]">◆</span>
              Education
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-extrabold tracking-[2.5px] text-[#94a3b8] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[2px] h-6 bg-[#1234d4] rounded-full animate-bounce" />
      </div>
    </section>
  );
}
