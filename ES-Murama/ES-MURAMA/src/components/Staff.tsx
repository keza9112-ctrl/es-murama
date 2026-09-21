'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slidesData = [
  {
    image: '/images/staff-admin-1.png',
    badge: 'ADMINISTRATION',
    step: '01 / ADMINISTRATION',
    title: 'School Leadership',
    description: 'Our administration provides leadership, coordination and support for the whole school community.',
  },
  {
    image: '/images/staff-teacher-1.png',
    badge: 'TEACHING STAFF',
    step: '02 / TEACHING STAFF',
    title: 'Teachers who inspire',
    description: 'Our teachers guide learners through knowledge, discipline, creativity and practical learning.',
  },
  {
    image: '/images/staff-support-1.png',
    badge: 'SUPPORTING STAFF',
    step: '03 / SUPPORTING STAFF',
    title: 'The team behind school life',
    description: 'Supporting staff help create a safe, organized and welcoming environment for learners and staff.',
  },
];

type Category = 'administration' | 'teaching' | 'supporting';

const staffMembers = [
  {
    category: 'administration' as Category,
    categoryName: 'ADMINISTRATION',
    title: 'Headteacher',
    role: 'School Leadership',
    phone: '+250 780 000 001',
    image: '/images/staff-admin-1.png',
  },
  {
    category: 'administration' as Category,
    categoryName: 'ADMINISTRATION',
    title: 'Deputy Headteacher',
    role: 'School Administration',
    phone: '+250 780 000 002',
    image: '/images/staff-admin-2.png',
  },
  {
    category: 'administration' as Category,
    categoryName: 'ADMINISTRATION',
    title: 'School Secretary',
    role: 'Administration & Records',
    phone: '+250 780 000 003',
    image: '/images/staff-admin-3.png',
  },
  {
    category: 'administration' as Category,
    categoryName: 'ADMINISTRATION',
    title: 'Accountant',
    role: 'Finance & Administration',
    phone: '+250 780 000 004',
    image: '/images/staff-admin-4.png',
  },
  {
    category: 'teaching' as Category,
    categoryName: 'TEACHING STAFF',
    title: 'Mathematics Teacher',
    role: 'Mathematics',
    phone: '+250 780 000 005',
    image: '/images/staff-teacher-1.png',
  },
  {
    category: 'teaching' as Category,
    categoryName: 'TEACHING STAFF',
    title: 'Science Teacher',
    role: 'Sciences',
    phone: '+250 780 000 006',
    image: '/images/staff-teacher-2.png',
  },
  {
    category: 'teaching' as Category,
    categoryName: 'TEACHING STAFF',
    title: 'Language Teacher',
    role: 'Languages',
    phone: '+250 780 000 007',
    image: '/images/staff-teacher-3.png',
  },
  {
    category: 'teaching' as Category,
    categoryName: 'TEACHING STAFF',
    title: 'ICT Teacher',
    role: 'Technology',
    phone: '+250 780 000 008',
    image: '/images/staff-teacher-4.png',
  },
  {
    category: 'supporting' as Category,
    categoryName: 'SUPPORTING STAFF',
    title: 'School Nurse',
    role: 'Student Welfare',
    phone: '+250 780 000 009',
    image: '/images/staff-support-1.png',
  },
  {
    category: 'supporting' as Category,
    categoryName: 'SUPPORTING STAFF',
    title: 'Matron',
    role: 'Student Support',
    phone: '+250 780 000 010',
    image: '/images/staff-support-2.png',
  },
  {
    category: 'supporting' as Category,
    categoryName: 'SUPPORTING STAFF',
    title: 'Librarian',
    role: 'Learning Resources',
    phone: '+250 780 000 011',
    image: '/images/staff-support-3.png',
  },
  {
    category: 'supporting' as Category,
    categoryName: 'SUPPORTING STAFF',
    title: 'General Services',
    role: 'School Operations',
    phone: '+250 780 000 012',
    image: '/images/staff-support-4.png',
  },
];

export default function Staff() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>('administration');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  const filteredStaff = staffMembers.filter(
    (member) => member.category === activeCategory
  );

  return (
    <section id="team" className="py-16 sm:py-24 px-4 sm:px-[7%] relative overflow-hidden bg-white text-[#0c1b48]">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(18,52,212,0.08),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(0,145,255,0.06),transparent_30%)] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-10">
        
        <div className="mb-8 sm:mb-11 max-w-[1100px]" data-aos="fade-up">
          <span className="text-[#1234d4] font-extrabold text-[10px] sm:text-[11px] tracking-[0.18em] uppercase mb-2 block">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-[54px] lg:text-[74px] font-black leading-[1.02] sm:leading-[0.98] text-[#0c1b48] tracking-[-1px] sm:tracking-tight mb-3 sm:mb-4">
            Meet the people behind <span className="text-[#1234d4] block sm:inline">Murama.</span>
          </h2>
          <p className="text-[#475467] text-sm sm:text-lg max-w-[720px] leading-[1.7] sm:leading-[1.85] opacity-90">
            Explore our administration, teaching staff and supporting staff.
          </p>
        </div>

        <div
          className="relative bg-white/80 border border-[#1234d4]/12 rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0_30px_70px_rgba(11,30,80,0.12)] backdrop-blur-md mb-8 sm:mb-11"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] sm:min-h-[490px]">
            
            <div className="md:col-span-6 relative min-h-[260px] sm:min-h-[320px] md:min-h-[490px] bg-gradient-to-br from-[#eaf1ff] to-[#f7fbff] overflow-hidden">
              <Image
                src={slidesData[currentSlide].image}
                alt={slidesData[currentSlide].title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#061549]/45 to-transparent pointer-events-none z-1" />
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/94 text-[#1234d4] text-[10px] sm:text-[11px] font-extrabold tracking-[0.14em] shadow-sm">
                {slidesData[currentSlide].badge}
              </div>
            </div>

            <div className="md:col-span-6 p-6 sm:p-12 lg:p-14 flex flex-col justify-center relative">
              <span className="text-[10px] sm:text-[11px] font-extrabold text-[#1234d4] tracking-[0.18em] uppercase mb-2 sm:mb-3 block">
                {slidesData[currentSlide].step}
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold text-[#0c1b48] leading-[1.05] mb-3 sm:mb-4">
                {slidesData[currentSlide].title}
              </h3>
              <p className="text-[#475467] text-sm sm:text-lg leading-[1.7] sm:leading-[1.8] opacity-90 max-w-[470px] mb-6 sm:mb-8">
                {slidesData[currentSlide].description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {slidesData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 transition-all duration-300 rounded-full ${
                        idx === currentSlide
                          ? 'w-7 bg-[#1234d4]'
                          : 'w-2.5 bg-[#1234d4]/25 hover:bg-[#1234d4]/50'
                      }`}
                      aria-label={`Show slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="w-11 h-11 rounded-full border border-gray-200 bg-white/92 text-[#1234d4] flex items-center justify-center text-2xl font-light hover:scale-105 transition-transform shadow-[0_8px_20px_rgba(9,29,88,0.1)]"
                    aria-label="Previous staff slide"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-11 h-11 rounded-full border border-gray-200 bg-white/92 text-[#1234d4] flex items-center justify-center text-2xl font-light hover:scale-105 transition-transform shadow-[0_8px_20px_rgba(9,29,88,0.1)]"
                    aria-label="Next staff slide"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" data-aos="fade-up">
          {(['administration', 'teaching', 'supporting'] as Category[]).map((cat) => {
            const labels: Record<Category, string> = {
              administration: 'Administration',
              teaching: 'Teaching Staff',
              supporting: 'Supporting Staff',
            };
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 py-3.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1234d4] text-white border-transparent shadow-[0_14px_28px_rgba(18,52,212,0.32)] scale-[1.02]'
                    : 'bg-white border border-[#1234d4]/18 text-[#0c1b48] hover:bg-[#1234d4] hover:text-white hover:border-[#1234d4] shadow-sm'
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStaff.map((member, index) => (
            <article
              key={member.phone + index}
              className="bg-white border border-[#1234d4]/12 rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(12,34,88,0.07)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(12,34,88,0.14)] transition-all duration-300 flex flex-col group"
            >
              
              <div className="relative aspect-[4/4.6] w-full bg-gradient-to-br from-[#e4edff] via-[#edf3ff] to-[#f4f8ff] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.title} photo`}
                  fill
                  className="object-cover group-hover:scale-[1.045] transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-7 bg-white flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-extrabold text-[#1234d4] tracking-[0.16em] uppercase block mb-2">
                    {member.categoryName}
                  </span>
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0c1b48] mb-1 leading-tight group-hover:text-[#1234d4] transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-[#98a2b3] text-sm font-medium mb-6 leading-relaxed">
                    {member.role}
                  </p>
                </div>

                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="pt-4 border-t border-gray-100 flex items-center justify-between text-[13px] font-extrabold text-[#1234d4] hover:underline group-hover:text-[#0f2bb5] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">☎</span>
                    <span>{member.phone}</span>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

