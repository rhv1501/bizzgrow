"use client";
import { portfolioProjects } from "../portfolio/projects";

const Clients = () => {
  // Dynamically pull client names from portfolio projects
  const allClients = portfolioProjects.map(p => p.title);
  
  // Split into two rows
  const midPoint = Math.ceil(allClients.length / 2);
  const row1 = allClients.slice(0, midPoint);
  const row2 = allClients.slice(midPoint);

  // We repeat the arrays many times to ensure they exceed the screen width
  // This is required for a seamless infinite loop
  const repeatedRow1 = Array(10).fill(row1).flat();
  const repeatedRow2 = Array(10).fill(row2).flat();

  // A custom brutalist star separator
  const StarSeparator = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-6 md:mx-12 lg:mx-16 animate-[spin_6s_linear_infinite] flex-shrink-0">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#FF3366" stroke="#111827" strokeWidth="2"/>
    </svg>
  );

  return (
    <section className="py-20 md:py-32 bg-brand-secondary relative border-y-2 border-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-20 mb-16 md:mb-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Trusted by brands that <br/>
            <span className="bg-[#FFD500] text-gray-900 px-4 py-1 rotate-2 inline-block border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-2">
              refuse to be boring
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-16 rotate-[-3deg] scale-[1.15] md:scale-110 pb-10">
        
        {/* Top Row - Moving Left */}
        {/* We use double standard width max to allow 50% translation without running out of content */}
        <div className="w-full overflow-hidden bg-white border-y-4 border-gray-900 py-3 md:py-4 shadow-[0_10px_0_0_rgba(0,0,0,1)]">
          <div className="flex w-max animate-[marqueeLeft_40s_linear_infinite]">
            {/* Half 1 */}
            <div className="flex items-center">
              {repeatedRow1.map((client, idx) => (
                <div key={`h1-${idx}`} className="flex items-center group cursor-crosshair">
                  <span className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent [-webkit-text-stroke:1px_#111827] md:[-webkit-text-stroke:2px_#111827] hover:text-brand-mint hover:[-webkit-text-stroke:0px] transition-all duration-300 uppercase tracking-tighter whitespace-nowrap">
                    {client}
                  </span>
                  <StarSeparator />
                </div>
              ))}
            </div>
            {/* Half 2 (Exact Duplicate) */}
            <div className="flex items-center">
              {repeatedRow1.map((client, idx) => (
                <div key={`h2-${idx}`} className="flex items-center group cursor-crosshair">
                  <span className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent [-webkit-text-stroke:1px_#111827] md:[-webkit-text-stroke:2px_#111827] hover:text-brand-mint hover:[-webkit-text-stroke:0px] transition-all duration-300 uppercase tracking-tighter whitespace-nowrap">
                    {client}
                  </span>
                  <StarSeparator />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="w-full overflow-hidden bg-brand-primary border-y-4 border-gray-900 py-3 md:py-4 shadow-[0_10px_0_0_rgba(0,0,0,1)]">
          <div className="flex w-max animate-[marqueeRight_45s_linear_infinite]">
            {/* Half 1 */}
            <div className="flex items-center">
              {repeatedRow2.map((client, idx) => (
                <div key={`h1-${idx}`} className="flex items-center group cursor-crosshair">
                  <span className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent [-webkit-text-stroke:1px_#111827] md:[-webkit-text-stroke:2px_#111827] hover:text-[#FFD500] hover:[-webkit-text-stroke:0px] transition-all duration-300 uppercase tracking-tighter whitespace-nowrap">
                    {client}
                  </span>
                  <StarSeparator />
                </div>
              ))}
            </div>
            {/* Half 2 (Exact Duplicate) */}
            <div className="flex items-center">
              {repeatedRow2.map((client, idx) => (
                <div key={`h2-${idx}`} className="flex items-center group cursor-crosshair">
                  <span className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent [-webkit-text-stroke:1px_#111827] md:[-webkit-text-stroke:2px_#111827] hover:text-[#FFD500] hover:[-webkit-text-stroke:0px] transition-all duration-300 uppercase tracking-tighter whitespace-nowrap">
                    {client}
                  </span>
                  <StarSeparator />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Clients;
