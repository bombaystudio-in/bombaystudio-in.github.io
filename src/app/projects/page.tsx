"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  MapPin,
  Images,
  ArrowUpRight,
  Phone,
  Play,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "4BHK",
  "3BHK",
  "2BHK",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Images className="w-3.5 h-3.5" />
            <span>Turnkey Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Delivered <span className="gold-gradient-text">Projects</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg font-light mt-4 leading-relaxed">
            Real photography from completed residential and commercial projects across Mumbai. Select a project below to view its dedicated photo gallery and verified handover details.
          </p>
        </div>

        {/* Category Filters: 4BHK, 3BHK, 2BHK */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#D4AF37] text-[#050505] shadow-lg shadow-[#D4AF37]/20 scale-105 font-bold"
                    : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/25"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-black/20 text-[#050505]" : "bg-white/10 text-[#A1A1AA]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              {/* Cover Image Container - Clean Maximum View Without Redundant Overlays */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Subtle Video Tour Pill (Only shown if video exists) */}
                {project.walkthroughVideo && (
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 flex items-center gap-1.5">
                      <Play className="w-3 h-3 fill-current text-[#D4AF37]" />
                      <span>Video Tour</span>
                    </span>
                  </div>
                )}

                {/* Photo Count Tag */}
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-black/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {project.photoCount} Photos
                  </span>
                </div>
              </div>

              {/* Card Body - Single Source of Truth for Project Metadata */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-[#A1A1AA] uppercase tracking-wider font-mono">
                    <span className="text-[#D4AF37] font-semibold">{project.typology}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-[#D4AF37] transition-colors pt-0.5">
                    {project.name}
                  </h2>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-white/80 font-normal">Turnkey Handover</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18181B] via-[#09090B] to-[#18181B] border border-[#D4AF37]/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Planning Work For <span className="gold-gradient-text">Your Next Project?</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm font-light">
              Connect directly with Ar. Aakhir Choudhary to discuss your layout, material selection, and turnkey execution.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-full"
              >
                <span>Book Free Design Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919820000000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#121212] text-white border border-white/15 text-xs font-semibold hover:border-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Studio Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
