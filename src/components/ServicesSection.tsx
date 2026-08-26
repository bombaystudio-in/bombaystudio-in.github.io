"use client";

import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import {
  Building2,
  Compass,
  KeyRound,
  Hammer,
  Home,
  Briefcase,
  Armchair,
  Eye,
  ClipboardCheck,
  BarChart3,
  Sun,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      case "Compass":
        return <Compass className="w-6 h-6" />;
      case "KeyRound":
        return <KeyRound className="w-6 h-6" />;
      case "Sun":
        return <Sun className="w-6 h-6" />;
      case "Hammer":
        return <Hammer className="w-6 h-6" />;
      case "Home":
        return <Home className="w-6 h-6" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "Armchair":
        return <Armchair className="w-6 h-6" />;
      case "Eye":
        return <Eye className="w-6 h-6" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-6 h-6" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
              Comprehensive Capabilities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Specialized <span className="gold-gradient-text">Services</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] text-sm max-w-md font-light">
            From Vastu-compliant architectural planning to full turnkey interior master builds across Mumbai.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#A1A1AA] text-xs leading-relaxed font-light mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 mb-4">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C1C] text-[#A1A1AA]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] group-hover:text-white transition-colors"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
