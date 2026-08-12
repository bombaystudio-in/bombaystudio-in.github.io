"use client";

import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { title: "On Time Delivery", desc: "Strict penalty clauses if handover delays occur." },
    { title: "Premium Finishes", desc: "Mirror-lacquer PU, smooth veneers & seamless marble joints." },
    { title: "Penalty-Backed Delivery", desc: "Contractually committed completion deadlines." },
    { title: "Fixed Timeline", desc: "Itemized project schedule linked to milestone approvals." },
    { title: "Quality Materials", desc: "Certified IS-710 BWP marine plywood & branded fittings." },
    { title: "Dedicated Team", desc: "Architects, interior stylists & site engineers working together." },
    { title: "Site Supervision", desc: "Daily site checks & continuous photo/video progress reporting." },
    { title: "Transparent Billing", desc: "Zero hidden costs or surprise mid-project price bumps." },
    { title: "10-Year Warranty", desc: "Structural warranty and complimentary 1-year maintenance." },
  ];

  return (
    <section className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              The <span className="gold-gradient-text">Bombay Studio</span> Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((pt, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
                <div className="p-2 rounded-lg bg-[#1C1C1C] text-[#D4AF37] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{pt.title}</h3>
                  <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
