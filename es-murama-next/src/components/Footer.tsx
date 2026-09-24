'use client';

import Image from 'next/image';
import { FiMapPin, FiPhoneCall, FiMail, FiChevronRight } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Staff', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-[#070e20] text-white">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-24 text-[#070e20] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-6 sm:pt-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Murama Secondary School Logo"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-white font-black text-lg sm:text-xl tracking-wider leading-tight">
                  MURAMA
                </h3>
                <span className="text-[#3b82f6] font-bold text-[10px] tracking-[2px] uppercase">
                  SECONDARY SCHOOL
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-[420px]">
              Inspiring young minds through knowledge, discipline and excellence.
            </p>
          </div>

          {/* Quick Links & Contact Columns (Side by side on all screen sizes) */}
          <div className="md:col-span-7 grid grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
            {/* Quick Links Column */}
            <div className="flex flex-col">
              <h4 className="text-[#7ea5ea] font-extrabold text-[11px] sm:text-[12px] tracking-[2px] sm:tracking-[2.5px] uppercase mb-4">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-300">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group inline-flex items-center gap-1.5 py-1 text-gray-300 hover:text-white transition-all hover:translate-x-1"
                    >
                      <FiChevronRight className="w-3.5 h-3.5 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0 hidden sm:inline-block" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col">
              <h4 className="text-[#7ea5ea] font-extrabold text-[11px] sm:text-[12px] tracking-[2px] sm:tracking-[2.5px] uppercase mb-4">
                CONTACT
              </h4>
              <div className="flex flex-col gap-3 text-sm font-medium text-gray-300">
                <div className="flex items-start gap-2.5">
                  <FiMapPin className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                  <span>Murama, Rwanda</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiPhoneCall className="w-4 h-4 text-[#3b82f6] shrink-0" />
                  <a
                    href="tel:+250785723576"
                    className="hover:text-white transition-colors"
                  >
                    +250 785 723 576
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiMail className="w-4 h-4 text-[#3b82f6] shrink-0" />
                  <a
                    href="mailto:esmurama10@yahoo.fr"
                    className="hover:text-white transition-colors break-all"
                  >
                    esmurama10@yahoo.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Murama Secondary School. All rights reserved.</span>
          <span>Inspiring young minds in Rwanda</span>
        </div>
      </div>
    </footer>
  );
}
