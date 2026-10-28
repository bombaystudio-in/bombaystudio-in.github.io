"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  MapPin,
  Home,
  Images,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import CarouselControls from "./CarouselControls";

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
      className="py-8 sm:py-10 lg:py-12 bg-[#050505] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Featured <span className="gold-gradient-text">Residences</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            Authentic completed homes across Mumbai from our active project portfolio.
          </p>
        </div>

        {/* Highlighted Master Project Case Study */}
        <div className="mb-5 sm:mb-6 rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-6 lg:p-7 border border-white/15 shadow-2xl relative overflow-hidden">
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37] w-full animate-timer-progress opacity-70"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Visual Viewer */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[32svh] sm:max-h-[38svh] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={activeImage}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15">
                    {selectedProject.typology}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#050505]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold border border-white/15">
                    {selectedProject.location}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#A1A1AA] border border-white/10">
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
                    className={`relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
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
            <div className="lg:col-span-5 space-y-3.5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                    Featured Residence #{currentIndex + 1} of {PROJECTS_DATA.length}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/20">
                    {selectedProject.typology}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Verified Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#121212] border border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px]">Location</p>
                    <p className="text-white font-semibold truncate text-[11px] sm:text-xs">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Home className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px]">Configuration</p>
                    <p className="text-white font-semibold text-[11px] sm:text-xs">{selectedProject.typology}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Images className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px]">Portfolio</p>
                    <p className="text-white font-semibold text-[11px] sm:text-xs">{selectedProject.photoCount} Handover Photos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 text-[#D4AF37] font-bold shrink-0 text-center">✓</span>
                  <div>
                    <p className="text-[#A1A1AA] text-[10px]">Execution</p>
                    <p className="text-white font-semibold text-[11px] sm:text-xs">Completed Site</p>
                  </div>
                </div>
              </div>

              {/* Verified Client Review (if from folder) */}
              {selectedProject.clientReview && (
                <div className="p-3 rounded-xl bg-[#09090B] border border-[#D4AF37]/20 relative">
                  <Quote className="w-4 h-4 text-[#D4AF37]/40 mb-0.5" />
                  <p className="text-[11px] sm:text-xs text-[#E4E4E7] italic font-light line-clamp-2">
                    &quot;{selectedProject.clientReview.quote}&quot;
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-semibold text-[#D4AF37]">
                    — {selectedProject.clientReview.name}
                  </p>
                </div>
              )}

              {/* Direct Link */}
              <div className="pt-0.5">
                <Link
                  href="/projects"
                  className="w-full text-center btn-gold-shiny text-xs uppercase tracking-wider py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5"
                >
                  <span>Explore All Residence Photos</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Carousel Track */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-1">
          {PROJECTS_DATA.map((project, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={project.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActivePhotoIdx(0);
                }}
                className={`shrink-0 w-48 sm:w-56 p-2 sm:p-2.5 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-[#1A1A1A] border-[#D4AF37] scale-102 shadow-lg shadow-[#D4AF37]/10"
                    : "bg-[#121212]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-black">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-black/80 text-[#D4AF37] border border-white/10">
                    {project.typology}
                  </span>
                </div>
                <h4 className="text-[11px] sm:text-xs font-semibold text-white truncate">{project.name}</h4>
                <p className="text-[10px] text-[#A1A1AA] flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{project.location}</span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls Below Section */}
        <CarouselControls
          isPaused={isPaused}
          onTogglePause={() => setIsPaused((prev) => !prev)}
          onPrev={prevProject}
          onNext={nextProject}
          prevLabel="Previous Residence"
          nextLabel="Next Residence"
          ctaText="View All 12 Residences"
          ctaHref="/projects"
        />
      </div>
    </section>
  );
}
