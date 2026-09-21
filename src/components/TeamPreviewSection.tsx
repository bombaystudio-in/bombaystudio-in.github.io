import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TeamPreviewSection() {
  const teamPhotos = [
    { name: "Kalamuddin Choudhary", img: "/team/kalamuddin-choudhary.png" },
    { name: "Ar. Aakhir Choudhary", img: "/team/akhir-chaudhary-founder-portrait.png" },
    { name: "Razzak Khan", img: "/team/razzak-khan.png" },
    { name: "Arpita Kanojia", img: "/team/arpita-kanojia.png" },
    { name: "Arshiya Shaikh", img: "/team/arshiya-shaikh.png" },
    { name: "Varsha Dongre", img: "/team/varsha-dongre.png" },
    { name: "Azhar Akram", img: "/team/azhar-akram.png" },
    { name: "Sunil Jaiswal", img: "/team/sunil-jaiswal.png" },
    { name: "Rajesh Vishwakarma", img: "/team/rajesh-vishwakarma.png" },
    { name: "Meraj Usmani", img: "/team/meraj-usmani.png" },
    { name: "Sarfaraz Athar", img: "/team/sarfaraz-athar.png" },
    { name: "Kalpesh Bhagwat", img: "/team/kalpesh-bhagwat.png" },
  ];

  return (
    <section id="team" className="py-10 sm:py-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-5">
          {/* Subtle Header: Minimal Editorial Note and Dedicated Link */}
          <div className="text-center space-y-1.5 mb-2">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
              Multidisciplinary Team &amp; Execution
            </h2>
            <div>
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white transition-colors font-medium mt-1"
              >
                <span>View Full Hierarchy &amp; Team Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Single Row of All 12 Portraits - Subtle, Non-interactive, No Numbers */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {teamPhotos.map((member, idx) => (
              <div
                key={idx}
                className="shrink-0 w-14 sm:w-auto sm:flex-1 aspect-[3/4] rounded-lg overflow-hidden bg-[#141414] border border-white/10"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale opacity-75 contrast-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

