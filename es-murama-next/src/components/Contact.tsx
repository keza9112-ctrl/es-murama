'use client';

import Image from 'next/image';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { FaSchool } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/50 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start" data-aos="fade-right">
            <span className="text-[#1234d4] font-extrabold text-[11px] tracking-[2.5px] uppercase mb-3 inline-block px-3.5 py-1 rounded-full bg-[#1234d4]/[0.08] border border-[#1234d4]/15">
              OUR LOCATION &amp; CONTACT
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#101a3a] leading-tight mb-4 tracking-tight">
              Let&apos;s stay <span className="text-[#1234d4]">connected.</span>
            </h2>

            <p className="text-[#667085] text-base leading-relaxed mb-8 max-w-[500px]">
              We welcome prospective students, parents, and community members to visit our campus or get in touch with our administrative office in Ruhango District.
            </p>

            <div className="w-full flex flex-col gap-5 mb-8">
              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-[#1234d4]/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#1234d4]/10 text-[#1234d4] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#1234d4] group-hover:text-white transition-colors">
                  <FiPhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#1234d4] tracking-widest uppercase block mb-0.5">
                    PHONE CONTACT
                  </span>
                  <a href="tel:+250785723576" className="text-base font-extrabold text-[#101a3a] hover:text-[#1234d4] transition-colors">
                    +250 785 723 576
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-[#1234d4]/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#1234d4]/10 text-[#1234d4] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#1234d4] group-hover:text-white transition-colors">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#1234d4] tracking-widest uppercase block mb-0.5">
                    EMAIL INQUIRIES
                  </span>
                  <a href="mailto:esmurama10@yahoo.fr" className="text-base font-extrabold text-[#101a3a] hover:text-[#1234d4] transition-colors break-all">
                    esmurama10@yahoo.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-[#1234d4]/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#1234d4]/10 text-[#1234d4] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#1234d4] group-hover:text-white transition-colors">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-[#1234d4] tracking-widest uppercase block mb-0.5">
                    SCHOOL LOCATION
                  </span>
                  <strong className="text-sm font-extrabold text-[#101a3a] block">
                    Ruhango District, Murama, Southern Province, Rwanda
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#1234d4] animate-bounce [animation-delay:0ms]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#1234d4] animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 rounded-full bg-[#1234d4] animate-bounce [animation-delay:300ms]" />
            </div>
          </div>

          <div
            className="lg:col-span-6 flex flex-col justify-center items-center py-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#1234d4]/10 blur-3xl scale-95 pointer-events-none" />

              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/rwanda-clean-vector-map.jpg"
                    alt="Clean vector map of Rwanda highlighting Ruhango District location for ES-Murama Secondary School"
                    fill
                    className="object-contain"
                    priority
                  />

                  <div className="absolute top-[48%] left-[43%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin">
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1234d4] opacity-40"></span>
                      <span className="relative inline-flex items-center justify-center rounded-full h-7 w-7 bg-[#1234d4] text-white shadow-lg border-2 border-white group-hover/pin:scale-110 transition-transform">
                        <FaSchool className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

