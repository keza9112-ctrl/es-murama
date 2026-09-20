'use client';

const academicSubjects = [
  {
    number: '01',
    symbol: '∑',
    title: 'Mathematics',
    description: 'Developing logical thinking, problem solving and analytical skills.',
    featured: false,
  },
  {
    number: '02',
    symbol: '⚛',
    title: 'Sciences',
    description: 'Exploring the world through scientific discovery and experimentation.',
    featured: true,
  },
  {
    number: '03',
    symbol: '◈',
    title: 'Languages',
    description: 'Building communication skills and confidence through languages.',
    featured: false,
  },
  {
    number: '04',
    symbol: '◉',
    title: 'Technology',
    description: 'Preparing students for a rapidly changing digital world.',
    featured: false,
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-16 sm:py-28 bg-[#f7f9ff] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] -right-[180px] sm:-right-[250px] -top-[150px] sm:-top-[200px] rounded-full border border-[#1234d4]/10 pointer-events-none animate-[spin_20s_linear_infinite]" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 sm:gap-10 mb-10 sm:mb-16">
          <div className="lg:col-span-7" data-aos="fade-right">
            <span className="text-[#1234d4] font-extrabold text-[10px] sm:text-[11px] tracking-[4px] uppercase mb-3 inline-block">
              OUR ACADEMICS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[75px] font-black text-[#101a3a] leading-[0.98] tracking-[-1.5px] sm:tracking-[-3.5px]">
              Learn beyond <span className="text-[#1234d4]">the classroom.</span>
            </h2>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="100">
            <p className="text-[#667085] text-sm sm:text-base leading-[1.8] max-w-[420px]">
              We encourage curiosity, critical thinking and practical knowledge through a strong academic foundation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-16">
          {academicSubjects.map((item, index) => (
            <article
              key={item.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className={`relative min-h-[280px] sm:min-h-[300px] p-6 sm:p-8 rounded-[24px] sm:rounded-[28px] flex flex-col justify-between overflow-hidden transition-all duration-300 group border ${
                item.featured
                  ? 'bg-[#1234d4] text-white shadow-2xl shadow-[#1234d4]/30 border-transparent'
                  : 'bg-white text-[#101a3a] border-[#1234d4]/[0.08] shadow-[0_15px_40px_rgba(20,40,100,0.06)] hover:shadow-2xl hover:-translate-y-1.5'
              }`}
            >
              
              <div
                className={`absolute w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] -right-[50px] -bottom-[60px] sm:-right-[60px] sm:-bottom-[70px] rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                  item.featured ? 'bg-white/10' : 'bg-[#1234d4]/[0.06]'
                }`}
              />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span
                    className={`text-xs font-extrabold tracking-[2px] block mb-2 sm:mb-3 ${
                      item.featured ? 'text-white/60' : 'text-[#98a2b3]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <div
                    className={`w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-[16px] sm:rounded-[18px] border flex items-center justify-center text-[22px] sm:text-[27px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${
                      item.featured
                        ? 'border-white/30 text-white bg-white/10'
                        : 'border-[#1234d4]/15 text-[#1234d4] bg-[#1234d4]/[0.04]'
                    }`}
                  >
                    {item.symbol}
                  </div>
                </div>

                <span
                  className={`text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    item.featured ? 'text-white' : 'text-[#1234d4]'
                  }`}
                >
                  ↗
                </span>
              </div>

              <div className="relative z-10 mt-5 sm:mt-6">
                <h3 className={`text-2xl sm:text-[26px] font-extrabold tracking-[-0.5px] sm:tracking-[-1px] mb-2 ${item.featured ? 'text-white' : 'text-[#101a3a]'}`}>
                  {item.title}
                </h3>
                <p
                  className={`text-xs sm:text-[13px] leading-[1.7] ${
                    item.featured ? 'text-white/80' : 'text-[#667085]'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="flex items-center gap-3 sm:gap-5 text-[8px] sm:text-[9px] font-extrabold text-[#98a2b3] tracking-[2px] sm:tracking-[3px] uppercase justify-between sm:justify-start"
          data-aos="fade-up"
        >
          <span>KNOWLEDGE</span>
          <div className="flex-1 h-[1px] bg-[#dfe3eb]" />
          <span>CREATIVITY</span>
          <div className="flex-1 h-[1px] bg-[#dfe3eb]" />
          <span>DISCOVERY</span>
        </div>
      </div>
    </section>
  );
}
