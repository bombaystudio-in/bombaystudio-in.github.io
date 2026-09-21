import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TeamPreviewSection() {
  const teamSpotlight = [
    { name: "Mr. Kalamuddin Choudhary", role: "Founder Emeritus", img: "/team/kalamuddin-choudhary.png" },
    { name: "Ar. Aakhir Choudhary", role: "Principal Architect", img: "/team/akhir-chaudhary-founder-portrait.png" },
    { name: "Razzak Khan", role: "Associate Partner", img: "/team/razzak-khan.png" },
    { name: "Arpita Kanojia", role: "Senior Designer", img: "/team/arpita-kanojia.png" },
    { name: "Varsha Dongre", role: "Interior Designer", img: "/team/varsha-dongre.png" },
    { name: "Sunil Jaiswal", role: "Project Head", img: "/team/sunil-jaiswal.png" },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-panel p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left: Clean, Minimal Editorial Statement */}
          <div className="max-w-xl space-y-2">
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              Studio Leadership
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              A 12-Member Multidisciplinary Practice
            </h2>
            <p className="text-[#A1A1AA] text-sm font-light leading-relaxed">
              Governed across 6 disciplined tiers—from architectural concept and 3D CGI to turnkey on-site engineering.
            </p>
            <div className="pt-2">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>View Complete 6-Tier Hierarchy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Clean, synchronized photo row with zero text overlays */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
            {teamSpotlight.map((member) => (
              <div key={member.name} className="w-20 sm:w-24 shrink-0 text-center">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#141414] border border-white/10 mb-1.5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-white text-[11px] font-medium truncate">{member.name.split(" ")[0]}</p>
                <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider truncate">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
