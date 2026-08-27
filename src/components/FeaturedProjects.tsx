"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  MapPin,
  Maximize2,
  IndianRupee,
  Clock,
  Star,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");
  const [isPaused, setIsPaused] = useState(false);

  const selectedProject: Project = PROJECTS_DATA[currentIndex];

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    setActiveTab("after");
  }, []);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
    setActiveTab("after");
  }, []);

  // Auto-cycle through projects every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextProject();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextProject]);

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-[#050505] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Live Case Studies &amp; Execution Proof</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Featured <span className="gold-gradient-text">Projects</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-xl font-light mt-2">
              Explore real site transformations with full transparency on budgets, square footage, timelines, materials, and client reviews.
            </p>
          </div>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Auto-cycle indicators and pause toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className={`p-2.5 rounded-full border transition-all ${
                isPaused
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
                  : "bg-[#121212] text-[#A1A1AA] hover:text-white border-white/10"
              }`}
              title={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
              aria-label={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-black" /> : <Pause className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevProject}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextProject}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-5 py-3 rounded-full"
            >
              <span>View All Projects ({PROJECTS_DATA.length}+)</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Highlighted Master Project Case Study */}
        <div className="mb-10 rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Progress Bar for Auto-Cycle */}
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37] animate-[width_6s_linear]"
                style={{
                  animation: "marquee 6s linear infinite",
                }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Viewer */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-[280px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={
                    activeTab === "after"
                      ? selectedProject.afterImage
                      : selectedProject.beforeImage
                  }
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15">
                    {activeTab === "after" ? "Completed Site Handover" : "Raw Before Demolition"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#FCF6BA] text-xs font-semibold border border-white/15">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* View Toggle Tabs */}
              <div className="flex items-center gap-3 p-1.5 rounded-xl bg-[#121212] border border-white/10">
                <button
                  onClick={() => setActiveTab("after")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "after"
                      ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  After Handover (Completed)
                </button>
                <button
                  onClick={() => setActiveTab("before")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "before"
                      ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  Before Site Condition
                </button>
              </div>
            </div>

            {/* Project Details & Specs */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                    Featured Case Study #{currentIndex + 1} of {PROJECTS_DATA.length}
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-mono">
                    {selectedProject.timeline}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3.5 p-4 rounded-xl bg-[#121212] border border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Location</p>
                    <p className="text-white font-semibold truncate">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Carpet Area</p>
                    <p className="text-white font-semibold">{selectedProject.area}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <IndianRupee className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Total Budget</p>
                    <p className="text-white font-semibold text-[#D4AF37]">{selectedProject.budget}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Timeline</p>
                    <p className="text-white font-semibold">{selectedProject.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Style & Scope */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[#A1A1AA]">Design Style: </span>
                  <span className="text-white font-medium">{selectedProject.designStyle}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">Material Palette: </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedProject.materialPalette.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded-md bg-[#1C1C1C] text-white border border-white/10 text-[11px]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Review */}
              <div className="p-3.5 rounded-xl bg-[#1C1C1C] border border-white/10 text-xs italic text-white">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="line-clamp-2">&quot;{selectedProject.clientReview.quote}&quot;</p>
                <p className="mt-1.5 text-[#D4AF37] font-semibold not-italic text-[11px]">
                  — {selectedProject.clientReview.name} ({selectedProject.clientReview.role})
                </p>
              </div>

              {/* Direct Booking Link */}
              <div className="pt-1 flex gap-3">
                <Link
                  href="/projects"
                  className="w-full text-center btn-gold-shiny text-xs uppercase tracking-wider py-3 rounded-xl inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Case Study Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Carousel / Thumbnail Track */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2">
          {PROJECTS_DATA.map((project, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={project.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActiveTab("after");
                }}
                className={`cursor-pointer p-3 rounded-2xl bg-[#121212] border transition-all duration-300 min-w-[220px] sm:min-w-[240px] shrink-0 group ${
                  isSelected
                    ? "border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-[1.02] bg-[#1C1C1C]"
                    : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                  <img
                    src={project.afterImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#050505]/80 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold">
                    {project.category}
                  </span>
                </div>

                <h4 className={`font-bold text-xs mb-1 line-clamp-1 ${isSelected ? "text-[#D4AF37]" : "text-white group-hover:text-white"}`}>
                  {project.name}
                </h4>

                <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
                  <span className="truncate max-w-[120px]">{project.location}</span>
                  <span className="text-[#FCF6BA] font-semibold">{project.budget}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
