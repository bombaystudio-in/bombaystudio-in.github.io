import { ArrowDown } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const level01 = {
    level: "01",
    title: "LEGACY & LEADERSHIP",
    name: "Mr. Kalamuddin Choudhary",
    role: "Founder Emeritus & Legacy Advisor",
    pedigree: "Founder · Noor Engineering Company (Est. 1992)",
    image: "/team/kalamuddin-choudhary.png",
    quote: "Building on uncompromising structural integrity and generational honesty since 1992.",
  };

  const level02 = {
    level: "02",
    title: "DESIGN LEADERSHIP",
    name: "Ar. Aakhir Choudhary",
    role: "Founder & Principal Architect",
    pedigree: "Principal Architect · Bombay Studio",
    image: "/team/akhir-chaudhary-founder-portrait.png",
    quote: "Merging three decades of structural pedigree with contemporary bespoke spatial luxury.",
  };

  const level03: TeamMember = {
    name: "Razzak Khan",
    role: "Associate / Project Partner",
    image: "/team/razzak-khan.png",
  };

  const level04: TeamMember = {
    name: "Arpita Kanojia",
    role: "Senior Interior Designer",
    image: "/team/arpita-kanojia.png",
  };

  const level05: TeamMember[] = [
    {
      name: "Arshiya Shaikh",
      role: "3D Visualiser",
      image: "/team/arshiya-shaikh.png",
    },
    {
      name: "Varsha Dongre",
      role: "Interior Designer",
      image: "/team/varsha-dongre.png",
    },
    {
      name: "Azhar Akram",
      role: "CAD Designer",
      image: "/team/azhar-akram.png",
    },
  ];

  const projectHeads: TeamMember[] = [
    {
      name: "Sunil Jaiswal",
      role: "Project Head",
      image: "/team/sunil-jaiswal.png",
    },
    {
      name: "Rajesh Vishwakarma",
      role: "Project Head",
      image: "/team/rajesh-vishwakarma.png",
    },
  ];

  const siteCoordinators: TeamMember[] = [
    {
      name: "Meraj Usmani",
      role: "Site Coordinator",
      image: "/team/meraj-usmani.png",
    },
    {
      name: "Sarfaraz Athar",
      role: "Site Coordinator",
      image: "/team/sarfaraz-athar.png",
    },
    {
      name: "Kalpesh Bhagwat",
      role: "Site Coordinator",
      image: "/team/kalpesh-bhagwat.png",
    },
  ];

  return (
    <section id="team" className="pt-6 pb-16 sm:pb-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 01 — LEGACY & LEADERSHIP */}
        {/* ========================================================================= */}
        <div id="level-01" className="mb-6 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-widest uppercase text-center">
              {level01.level} — {level01.title}
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Clean Image Box: Synced 3:4 aspect ratio, zero text inside */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-white/10">
                  <img
                    src={level01.image}
                    alt={level01.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Text strictly outside/below */}
              <div className="lg:col-span-7 space-y-3">
                <p className="text-[#A1A1AA] text-xs uppercase tracking-wider">{level01.pedigree}</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {level01.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-wide">
                  {level01.role}
                </p>
                <p className="text-[#A1A1AA] text-sm font-light italic leading-relaxed pt-1">
                  &quot;{level01.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Subtle Connector */}
        <div className="flex justify-center py-2">
          <ArrowDown className="w-4 h-4 text-[#D4AF37]/60" />
        </div>

        {/* ========================================================================= */}
        {/* 02 — DESIGN LEADERSHIP */}
        {/* ========================================================================= */}
        <div id="level-02" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-widest uppercase text-center">
              {level02.level} — {level02.title}
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Clean Image Box: Synced 3:4 aspect ratio, zero text inside */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-white/10">
                  <img
                    src={level02.image}
                    alt={level02.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Text strictly outside/below */}
              <div className="lg:col-span-7 space-y-3">
                <p className="text-[#A1A1AA] text-xs uppercase tracking-wider">{level02.pedigree}</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {level02.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-wide">
                  {level02.role}
                </p>
                <p className="text-[#A1A1AA] text-sm font-light italic leading-relaxed pt-1">
                  &quot;{level02.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 03 & 04 — ASSOCIATE & SENIOR DESIGN LEADERSHIP */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Level 03 */}
          <div id="level-03" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-wider uppercase text-center">
                03 — ASSOCIATE / DESIGN LEADERSHIP
              </span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="rounded-2xl glass-panel p-5 border border-white/10 flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-full max-w-[240px] sm:w-[240px] shrink-0 aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-white/10 mx-auto sm:mx-0">
                <img
                  src={level03.image}
                  alt={level03.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-xl font-bold text-white">{level03.name}</h4>
                <p className="text-[#D4AF37] text-xs uppercase tracking-wider">{level03.role}</p>
              </div>
            </div>
          </div>

          {/* Level 04 */}
          <div id="level-04" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-wider uppercase text-center">
                04 — SENIOR DESIGN TEAM
              </span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="rounded-2xl glass-panel p-5 border border-white/10 flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-full max-w-[240px] sm:w-[240px] shrink-0 aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-white/10 mx-auto sm:mx-0">
                <img
                  src={level04.image}
                  alt={level04.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-xl font-bold text-white">{level04.name}</h4>
                <p className="text-[#D4AF37] text-xs uppercase tracking-wider">{level04.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 05 — DESIGN & VISUALIZATION */}
        {/* ========================================================================= */}
        <div id="level-05" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-wider uppercase text-center">
              05 — DESIGN &amp; VISUALIZATION
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {level05.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl glass-panel p-4 border border-white/10 text-center"
              >
                {/* 100% clean image box - no text overlays */}
                <div className="w-full max-w-[240px] aspect-[3/4] mx-auto rounded-xl overflow-hidden bg-[#141414] border border-white/10 mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Text below */}
                <h4 className="font-serif text-base font-bold text-white">{member.name}</h4>
                <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 06 — TECHNICAL & PROJECT EXECUTION */}
        {/* ========================================================================= */}
        <div id="level-06" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-wider uppercase text-center">
              06 — TECHNICAL &amp; PROJECT EXECUTION
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          {/* Project Heads */}
          <div className="mb-6">
            <p className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-center">
              Project Heads
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {projectHeads.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl glass-panel p-4 border border-white/10 text-center"
                >
                  <div className="w-full max-w-[240px] aspect-[3/4] mx-auto rounded-xl overflow-hidden bg-[#141414] border border-white/10 mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h5 className="font-serif text-base font-bold text-white">{member.name}</h5>
                  <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Site Coordinators */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-center">
              Site Coordinators
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {siteCoordinators.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl glass-panel p-4 border border-white/10 text-center"
                >
                  <div className="w-full max-w-[240px] aspect-[3/4] mx-auto rounded-xl overflow-hidden bg-[#141414] border border-white/10 mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h5 className="font-serif text-base font-bold text-white">{member.name}</h5>
                  <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
