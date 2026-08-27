"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  ArrowLeft,
  MapPin,
  Maximize2,
  IndianRupee,
  Clock,
  Star,
  Sparkles,
  ArrowUpRight,
  Phone,
  Layers,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Apartments",
  "Villas",
  "Luxury Homes",
  "Office",
  "Restaurants",
  "Clinic",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeViews, setActiveViews] = useState<Record<string, "after" | "before">>({});

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const toggleProjectView = (id: string, view: "after" | "before") => {
    setActiveViews((prev) => ({ ...prev, [id]: view }));
  };

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

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Complete Architectural Case Studies</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Our Completed <span className="gold-gradient-text">Projects &amp; Handovers</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed">
            Transparent case studies of completed luxury apartments, bespoke seafront villas, commercial headquarters, and hospitality fitouts across Mumbai.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#D4AF37] text-[#050505] shadow-lg shadow-[#D4AF37]/20 scale-105 font-bold"
                    : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/25"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-black/20 text-[#050505]" : "bg-white/10 text-[#A1A1AA]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Detailed List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const currentView = activeViews[project.id] || "after";

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Interactive Image Visualizer */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-black">
                      <img
                        src={
                          currentView === "after"
                            ? project.afterImage
                            : project.beforeImage
                        }
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15">
                          {currentView === "after" ? "Completed Interior Handover" : "Raw Site Condition"}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#FCF6BA] text-xs font-semibold border border-white/15">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* View Switcher Tabs */}
                    <div className="flex items-center gap-3 p-1.5 rounded-xl bg-[#121212] border border-white/10">
                      <button
                        onClick={() => toggleProjectView(project.id, "after")}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          currentView === "after"
                            ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                            : "text-[#A1A1AA] hover:text-white"
                        }`}
                      >
                        After Handover (Completed)
                      </button>
                      <button
                        onClick={() => toggleProjectView(project.id, "before")}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          currentView === "before"
                            ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                            : "text-[#A1A1AA] hover:text-white"
                        }`}
                      >
                        Before Demolition / Raw Site
                      </button>
                    </div>
                  </div>

                  {/* Right: Detailed Specifications & Review */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                          Case Study #{idx + 1}
                        </span>
                        <span className="text-xs text-[#A1A1AA] font-mono">
                          {project.timeline} Turnkey Delivery
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                        {project.name}
                      </h2>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3.5 p-4 rounded-xl bg-[#121212] border border-white/10 text-xs">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Location</p>
                          <p className="text-white font-semibold">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Maximize2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Carpet Area</p>
                          <p className="text-white font-semibold">{project.area}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <IndianRupee className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Execution Budget</p>
                          <p className="text-white font-semibold text-[#D4AF37]">{project.budget}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Timeline</p>
                          <p className="text-white font-semibold">{project.timeline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Scope of Work */}
                    <div className="text-xs space-y-1.5">
                      <p className="text-[#A1A1AA] font-semibold uppercase tracking-wider text-[10px]">
                        Scope of Execution
                      </p>
                      <p className="text-white font-light leading-relaxed">
                        {project.scopeOfWork}
                      </p>
                    </div>

                    {/* Style & Materials */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[#A1A1AA]">Design Style: </span>
                        <span className="text-white font-medium">{project.designStyle}</span>
                      </div>
                      <div>
                        <span className="text-[#A1A1AA]">Material Palette: </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {project.materialPalette.map((mat, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-2.5 py-1 rounded-md bg-[#1C1C1C] text-white border border-white/10 text-[11px]"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Verified Review */}
                    <div className="p-4 rounded-xl bg-[#1C1C1C] border border-white/10 text-xs italic text-white">
                      <div className="flex items-center gap-1 text-[#D4AF37] mb-1.5">
                        {[...Array(project.clientReview.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        ))}
                      </div>
                      <p>&quot;{project.clientReview.quote}&quot;</p>
                      <p className="mt-2 text-[#D4AF37] font-semibold not-italic text-[11px]">
                        — {project.clientReview.name} ({project.clientReview.role})
                      </p>
                    </div>

                    {/* Inquire Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link
                        href="/#contact"
                        className="flex-1 text-center btn-gold-shiny text-xs uppercase tracking-wider py-3 rounded-xl inline-flex items-center justify-center gap-2"
                      >
                        <span>Book Similar Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={`https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(project.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-3 rounded-xl bg-[#121212] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold hover:bg-[#D4AF37]/10 transition-colors"
                      >
                        WhatsApp Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation CTA Banner */}
        <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 gold-border-glow text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            Fixed Budget Guarantee &amp; Penalty-Backed Handover
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Have A Project In Mind in Mumbai or Alibaug?
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light max-w-2xl mx-auto">
            Schedule a free site consultation or experience center visit with Principal Architect Ar. Aakhir Choudhary to calculate your itemized BOQ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full"
            >
              <span>Schedule Free Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917070704181"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] text-xs font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Studio Line: <strong className="text-[#FCF6BA] font-mono">+91 707070 4181</strong></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
