'use client';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Learn about our school and academic environment.',
  },
  {
    number: '02',
    title: 'Apply',
    description: 'Begin the admission process and submit the required information.',
  },
  {
    number: '03',
    title: 'Join Us',
    description: 'Become part of the Murama Secondary School community.',
  },
];

export default function Admissions() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="admissions"
      className="py-16 sm:py-28 bg-[radial-gradient(circle_at_85%_20%,rgba(30,110,255,0.14),transparent_35%),linear-gradient(135deg,#f7fbff,#eef6ff)] relative overflow-hidden min-h-[650px] sm:min-h-[750px] flex items-center"
    >
      
      <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#1e6eff]/15 -right-[140px] sm:-right-[180px] -top-[80px] sm:-top-[120px] pointer-events-none animate-[spin_18s_linear_infinite]" />
      <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#1e6eff]/10 -right-[50px] sm:-right-[80px] -top-[20px] sm:-top-[35px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start" data-aos="fade-right">
            <span className="text-[#126cff] font-extrabold text-[10px] sm:text-[11px] tracking-[4px] uppercase mb-3 sm:mb-4 inline-block">
              ADMISSIONS
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[75px] font-black text-[#071a35] leading-[0.98] tracking-[-1.5px] sm:tracking-[-3px] mb-5 sm:mb-6">
              Your journey{' '}
              <span className="text-[#1677ff] block mt-1">starts here.</span>
            </h2>

            <p className="text-[#607089] text-base sm:text-lg leading-[1.8] mb-7 sm:mb-8 max-w-[520px]">
              Begin your educational journey at Murama Secondary School. We welcome
              students who are ready to learn, grow and build a successful future.
            </p>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center gap-3.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#126cff] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#126cff]/30 hover:bg-[#0b5cdb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <span>Contact Admissions</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="lg:col-span-6 flex flex-col relative py-2 sm:py-4" data-aos="fade-left" data-aos-delay="100">
            {steps.map((step, index) => (
              <div key={step.number} className="relative grid grid-cols-[50px_1fr] sm:grid-cols-[65px_1fr] gap-4 sm:gap-6 pb-8 sm:pb-11 group">
                
                {index < steps.length - 1 && (
                  <div className="absolute w-[1px] h-[calc(100%-50px)] sm:h-[calc(100%-65px)] left-[25px] sm:left-[32px] top-[50px] sm:top-[65px] bg-gradient-to-b from-[#bcd7f7] to-transparent z-0" />
                )}

                <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] rounded-full bg-white border border-[#dbe9fa] text-[#126cff] font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-blue-900/5 transition-all duration-300 group-hover:bg-[#126cff] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-[#126cff]/25 z-10 shrink-0">
                  {step.number}
                </div>

                <div className="pt-1 sm:pt-2 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071a35] mb-1 sm:mb-2 group-hover:text-[#126cff] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#718097] text-xs sm:text-sm leading-[1.7] max-w-[420px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
