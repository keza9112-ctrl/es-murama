'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Staff', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const sectionIds = navItems.map((item) => item.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] sm:w-[calc(100%-60px)] max-w-[1240px] z-[1000]">
      <div
        className={`w-full bg-white rounded-[22px] border-2 border-[#1234d4]/25 shadow-[0_12px_35px_rgba(18,52,212,0.08)] transition-all duration-300 px-6 sm:px-8 py-3 flex items-center justify-between ${
          isScrolled ? 'border-[#1234d4]/40 shadow-[0_18px_40px_rgba(18,52,212,0.14)] bg-white/95 backdrop-blur-md' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group text-decoration-none shrink-0"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center relative p-0.5 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Murama Secondary School Official Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain drop-shadow-xs"
              priority
            />
          </div>
          <div className="flex flex-col">
            <strong className="text-[#1234d4] font-black text-[15px] sm:text-[17px] tracking-[0.5px] uppercase leading-tight mb-0.5">
              MURAMA
            </strong>
            <span className="text-[#8e9aaf] font-bold text-[9px] sm:text-[10px] tracking-[1.5px] uppercase leading-none">
              SECONDARY SCHOOL
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative transition-all duration-200 text-[14px] ${
                  isActive
                    ? 'bg-[#edf2fe] text-[#1234d4] font-extrabold px-5 py-2 rounded-xl shadow-xs border border-[#1234d4]/15'
                    : 'text-[#475569] font-bold hover:text-[#1234d4] hover:bg-[#1234d4]/5 px-4 py-2 rounded-xl'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#1234d4] text-white text-xl font-bold shadow-md focus:outline-none transition-transform active:scale-95 shrink-0"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl p-4 border-2 border-[#1234d4]/20 shadow-xl flex flex-col gap-1.5 animate-[fadeIn_0.2s_ease]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2.5 rounded-xl text-[14px] font-bold transition-all ${
                  isActive
                    ? 'bg-[#edf2fe] text-[#1234d4] border border-[#1234d4]/20'
                    : 'text-[#475569] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

