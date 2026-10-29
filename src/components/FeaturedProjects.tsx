"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  MapPin,
  Home,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
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

  // Auto-cycle through the project's photos, advancing to next project on completion
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePhotoIdx((prev) => {
        if (prev + 1 >= selectedProject.images.length) {
          nextProject();
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, selectedProject.images.length, nextProject]);

  const activeImage = selectedProject.images[activePhotoIdx] || selectedProject.images[0];

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-24 bg-[#050505] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Featured <span className="gold-gradient-text">Projects</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            Authentic turnkey projects delivered across Mumbai by Ar. Aakhir Choudhary and team.
          </p>
        </div>

        {/* Highlighted Master Project Case Study */}
        <div className="mb-6 rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-6 lg:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-20">
              <div
                key={`${currentIndex}-${activePhotoIdx}`}
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37] w-full animate-timer-progress opacity-85 shadow-[0_0_8px_#D4AF37]"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Viewer - Maximum View without default image clutter */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[46svh] sm:max-h-[52svh] w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl group select-none">
                <img
                  src={activeImage}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
                />

                {/* Left/Right Navigation Chevrons inside image */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={prevPhoto}
                      className="pointer-events-auto p-2 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                      aria-label="Previous Photo"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="pointer-events-auto p-2 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                      aria-label="Next Photo"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}

                {/* Clean Photo Count Badge */}
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#D4AF37] border border-white/10">
                    {activePhotoIdx + 1} / {selectedProject.images.length} Photos
                  </span>
                </div>

                {/* Progressive Disclosure: Floating Preview Dock (Revealed ONLY on hover) */}
                <div className="absolute bottom-3 left-3 right-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 scrollbar-none max-w-fit">
                    {selectedProject.images.map((img, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIdx(pIdx);
                        }}
                        className={`relative shrink-0 w-8 h-8 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          activePhotoIdx === pIdx
                            ? "border-[#D4AF37] scale-110 shadow-sm shadow-[#D4AF37]/30"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                        title={`View photo ${pIdx + 1}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-widest">
                  Featured Project · Mumbai
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Verified Specs Grid (Primary information source, not duplicated on image) */}
              <div className="grid grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#101010] border border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium truncate text-xs">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">Typology</p>
                    <p className="text-white font-medium text-xs">{selectedProject.typology}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Images className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">Gallery</p>
                    <p className="text-white font-medium text-xs">{selectedProject.photoCount} Actual Photos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 text-[#D4AF37] font-bold shrink-0">✓</span>
                  <div>
                    <p className="text-[#A1A1AA] text-[10px] uppercase tracking-wider">Execution</p>
                    <p className="text-white font-medium text-xs">Turnkey Completed</p>
                  </div>
                </div>
              </div>

              {/* Direct Action Link to Dedicated Case Study */}
              <div className="pt-2">
                <Link
                  href={`/projects/${selectedProject.id}`}
                  className="w-full text-center btn-gold-shiny text-xs uppercase tracking-wider py-3.5 rounded-full inline-flex items-center justify-center gap-2 font-semibold shadow-md"
                >
                  <span>View Project &amp; Full Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
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
          prevLabel="Previous Project"
          nextLabel="Next Project"
          ctaText="See All Projects"
          ctaHref="/projects"
        />
      </div>
    </section>
  );
}
