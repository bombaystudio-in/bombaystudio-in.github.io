"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  MapPin,
  Home,
  Images,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
} from "lucide-react";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const selectedProject: Project = PROJECTS_DATA[currentIndex];

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    setActivePhotoIdx(0);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
    setActivePhotoIdx(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextProject();
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, nextProject]);

  const activeImage = selectedProject.images[activePhotoIdx] || selectedProject.images[0];

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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="gold-gradient-text">Residences</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm max-w-xl font-light mt-2 mx-auto">
            Authentic completed homes across Mumbai from our active project portfolio.
          </p>

          {/* Interactive Controls Bar */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
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
                aria-label="Previous Residence"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Next Residence"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-5 py-3 rounded-full"
            >
              <span>View All 12 Residences</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Highlighted Master Project Case Study */}
        <div className="mb-10 rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37] w-full animate-timer-progress opacity-70"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Viewer */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={activeImage}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15">
                    {selectedProject.typology}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                    {selectedProject.location}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-[#A1A1AA] border border-white/10">
                    Photo {activePhotoIdx + 1} of {selectedProject.images.length}
                  </span>
                </div>
              </div>

              {/* Photo selector thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/20">
                {selectedProject.images.map((img, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setActivePhotoIdx(pIdx)}
                    className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      activePhotoIdx === pIdx
                        ? "border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/20"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                    Featured Residence #{currentIndex + 1} of {PROJECTS_DATA.length}
                  </span>
                  <span className="text-xs text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20">
                    {selectedProject.typology}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Verified Specs Grid */}
              <div className="grid grid-cols-2 gap-3.5 p-4 rounded-xl bg-[#121212] border border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Location</p>
                    <p className="text-white font-semibold truncate">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Configuration</p>
                    <p className="text-white font-semibold">{selectedProject.typology}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Images className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA]">Portfolio</p>
                    <p className="text-white font-semibold">{selectedProject.photoCount} Handover Photos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 text-[#D4AF37] font-bold shrink-0">✓</span>
                  <div>
                    <p className="text-[#A1A1AA]">Execution</p>
                    <p className="text-white font-semibold">Completed Site</p>
                  </div>
                </div>
              </div>

              {/* Verified Client Review (if from folder) */}
              {selectedProject.clientReview && (
                <div className="p-4 rounded-xl bg-[#09090B] border border-[#D4AF37]/20 relative">
                  <Quote className="w-5 h-5 text-[#D4AF37]/40 mb-1" />
                  <p className="text-xs text-[#E4E4E7] italic font-light line-clamp-3">
                    &quot;{selectedProject.clientReview.quote}&quot;
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-[#D4AF37]">
                    — {selectedProject.clientReview.name}
                  </p>
                </div>
              )}

              {/* Direct Link */}
              <div className="pt-1">
                <Link
                  href="/projects"
                  className="w-full text-center btn-gold-shiny text-xs uppercase tracking-wider py-3 rounded-xl inline-flex items-center justify-center gap-2"
                >
                  <span>Explore All Residence Photos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Carousel Track */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2">
          {PROJECTS_DATA.map((project, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={project.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActivePhotoIdx(0);
                }}
                className={`shrink-0 w-64 p-3 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-[#1A1A1A] border-[#D4AF37] scale-102 shadow-lg shadow-[#D4AF37]/10"
                    : "bg-[#121212]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative h-28 rounded-xl overflow-hidden mb-2.5 bg-black">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 text-[#D4AF37] border border-white/10">
                    {project.typology}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-white truncate">{project.name}</h4>
                <p className="text-[11px] text-[#A1A1AA] flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{project.location}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
