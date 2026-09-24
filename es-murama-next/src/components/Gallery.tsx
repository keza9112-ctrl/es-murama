'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    number: '01',
    title: 'Our School',
    subtitle: 'The Murama Secondary School campus',
    image: '/images/school.png',
    alt: 'Murama Secondary School buildings',
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    number: '02',
    title: 'Achievement',
    subtitle: 'Celebrating student success',
    image: '/images/awards.png',
    alt: 'Students receiving certificates',
    gridClass: 'md:col-span-1',
  },
  {
    number: '03',
    title: 'Science',
    subtitle: 'Learning through practical discovery',
    image: '/images/laboratory.png',
    alt: 'Students during a science activity',
    gridClass: 'md:col-span-1',
  },
  {
    number: '04',
    title: 'Community',
    subtitle: 'Together we celebrate',
    image: '/images/achievement.png',
    alt: 'School achievement event',
    gridClass: 'md:col-span-1',
  },
  {
    number: '05',
    title: 'Culture',
    subtitle: 'Celebrating talent and tradition',
    image: '/images/culture.png',
    alt: 'Traditional dance performance at school',
    gridClass: 'md:col-span-2',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => ((prev! + 1) % galleryItems.length));
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => ((prev! - 1 + galleryItems.length) % galleryItems.length));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const activeItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12">
          <div data-aos="fade-right">
            <span className="text-[#1234d4] font-extrabold text-[11px] tracking-[2.5px] uppercase mb-3 inline-block px-3 py-1 rounded-full bg-[#1234d4]/[0.08] border border-[#1234d4]/15">
              SCHOOL GALLERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101a3a] leading-tight">
              Life at <span className="text-[#1234d4]">Murama.</span>
            </h2>
          </div>

          <p
            className="text-[#667085] text-sm sm:text-base max-w-[440px] leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Discover moments of learning, achievement, creativity and community at
            Murama Secondary School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px] sm:auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.number}
              onClick={() => setSelectedIndex(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-1000 before:z-20 ${item.gridClass}`}
            >
              
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover brightness-[1.06] contrast-[1.03] saturate-[1.05] group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061234]/80 via-[#061234]/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-5 sm:p-6 flex flex-col justify-end text-white z-10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black text-[#1234d4] tracking-widest bg-white px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.number}
                  </span>
                  
                  <span className="w-8 h-8 rounded-full bg-white/90 text-[#1234d4] flex items-center justify-center text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    🔍
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-0.5 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs font-medium opacity-90">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-[10000] bg-black/92 backdrop-blur-lg flex flex-col items-center justify-between p-4 sm:p-8 animate-[fadeIn_0.25s_ease]"
          onClick={() => setSelectedIndex(null)}
        >
          
          <div className="w-full max-w-6xl flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold text-[#1234d4] tracking-widest bg-white/95 px-3 py-1 rounded-full uppercase shadow-sm">
                {activeItem.number} / 05
              </span>
              <span className="text-white font-extrabold text-sm sm:text-base">
                {activeItem.title}
              </span>
            </div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-all focus:outline-none border border-white/10"
              aria-label="Close carousel"
            >
              ✕
            </button>
          </div>

          <div
            className="relative w-full max-w-5xl h-[55vh] sm:h-[65vh] flex items-center justify-center my-auto group"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-[#1234d4] text-[#1234d4] hover:text-white text-2xl font-light flex items-center justify-center shadow-2xl transition-all duration-300 z-30 border border-gray-200"
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/40">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                className="object-contain transition-all duration-500"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 text-center text-white">
                <h4 className="text-lg sm:text-2xl font-bold mb-1">{activeItem.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm font-medium">{activeItem.subtitle}</p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-[#1234d4] text-[#1234d4] hover:text-white text-2xl font-light flex items-center justify-center shadow-2xl transition-all duration-300 z-30 border border-gray-200"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div className="w-full max-w-2xl flex items-center justify-center gap-3 py-2 z-20" onClick={(e) => e.stopPropagation()}>
            {galleryItems.map((item, idx) => (
              <button
                key={item.number}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  idx === selectedIndex
                    ? 'border-[#1234d4] scale-105 shadow-lg shadow-[#1234d4]/40 ring-2 ring-white/80'
                    : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white'
                }`}
                aria-label={`Show ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
