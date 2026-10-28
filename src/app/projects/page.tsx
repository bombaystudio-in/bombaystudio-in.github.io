"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/projects";
import {
  ArrowLeft,
  MapPin,
  Home,
  Images,
  ArrowUpRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "4BHK",
  "3BHK",
  "2BHK",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<Record<string, number>>({});
  const [showingVideo, setShowingVideo] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const setPhoto = (projectId: string, index: number) => {
    setShowingVideo((prev) => ({ ...prev, [projectId]: false }));
    setSelectedPhotoIndex((prev) => ({ ...prev, [projectId]: index }));
  };

  const nextPhoto = (project: Project) => {
    const current = selectedPhotoIndex[project.id] || 0;
    const nextIdx = (current + 1) % project.images.length;
    setPhoto(project.id, nextIdx);
  };

  const prevPhoto = (project: Project) => {
    const current = selectedPhotoIndex[project.id] || 0;
    const prevIdx = (current - 1 + project.images.length) % project.images.length;
    setPhoto(project.id, prevIdx);
  };

  const toggleVideo = (projectId: string) => {
    setShowingVideo((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
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

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Images className="w-3.5 h-3.5" />
            <span>Actual Completed Projects</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Delivered <span className="gold-gradient-text">Residences</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg font-light mt-4 leading-relaxed">
            Real photography from completed 2BHK, 3BHK, and 4BHK homes across Mumbai designed &amp; executed by Ar. Aakhir Choudhary and the Bombay Studio execution team.
          </p>
        </div>

        {/* Category Filters: 4BHK, 3BHK, 2BHK */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
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
        <div className="space-y-14">
          {filteredProjects.map((project, idx) => {
            const currentPhotoIdx = selectedPhotoIndex[project.id] || 0;
            const isVideoActive = showingVideo[project.id] || false;
            const activeImageSrc = project.images[currentPhotoIdx] || project.images[0];

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Interactive Multi-Photo Visualizer */}
                  <div className="lg:col-span-7 space-y-3.5">
                    <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/15 bg-black group select-none">
                      {isVideoActive && project.walkthroughVideo ? (
                        <video
                          src={project.walkthroughVideo}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <img
                            src={activeImageSrc}
                            alt={`${project.name} - Photo ${currentPhotoIdx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-500 filter contrast-105"
                          />

                          {/* Navigation Chevrons on Main Image */}
                          {project.images.length > 1 && (
                            <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevPhoto(project);
                                }}
                                className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md"
                                aria-label="Previous Photo"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextPhoto(project);
                                }}
                                className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md"
                                aria-label="Next Photo"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {/* Header Badges */}
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15">
                          {project.typology}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                          {project.location}
                        </span>
                      </div>

                      {/* Photo Index Badge */}
                      <div className="absolute bottom-4 right-4 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-[#A1A1AA] border border-white/10">
                          {isVideoActive
                            ? "Walkthrough Video"
                            : `${currentPhotoIdx + 1} / ${project.images.length} Photos`}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Thumbnail Gallery Strip */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#A1A1AA] px-1">
                        <span className="font-semibold text-white">
                          Handover Gallery ({project.images.length} Photos)
                        </span>
                        {project.walkthroughVideo && (
                          <button
                            onClick={() => toggleVideo(project.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold transition-all ${
                              isVideoActive
                                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                                : "bg-[#121212] text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                            }`}
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{isVideoActive ? "View Photos" : "Watch Walkthrough Tour"}</span>
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20">
                        {project.images.map((imgSrc, imgIdx) => {
                          const isSelected = !isVideoActive && currentPhotoIdx === imgIdx;
                          return (
                            <button
                              key={imgIdx}
                              onClick={() => setPhoto(project.id, imgIdx)}
                              className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                isSelected
                                  ? "border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/20"
                                  : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                              }`}
                              title={`View Photo ${imgIdx + 1}`}
                            >
                              <img
                                src={imgSrc}
                                alt={`Thumbnail ${imgIdx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: Detailed Specifications & Review */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                          Residence #{idx + 1}
                        </span>
                        <span className="text-xs text-[#FCF6BA] font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          {project.typology} Completed
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                        {project.name}
                      </h2>
                    </div>

                    {/* Factual Specs Grid */}
                    <div className="grid grid-cols-2 gap-3.5 p-4 rounded-xl bg-[#121212] border border-white/10 text-xs">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Location</p>
                          <p className="text-white font-semibold">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Home className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Typology</p>
                          <p className="text-white font-semibold">{project.typology}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Images className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="text-[#A1A1AA]">Gallery</p>
                          <p className="text-white font-semibold">{project.photoCount} Handover Photos</p>
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

                    {/* Client Review (Only for clients from folder) */}
                    {project.clientReview && (
                      <div className="p-4 rounded-xl bg-[#09090B] border border-[#D4AF37]/20 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-wider">
                            Verified Client Review
                          </span>
                        </div>
                        <Quote className="w-5 h-5 text-[#D4AF37]/40 mb-1" />
                        <p className="text-xs text-[#E4E4E7] italic font-light leading-relaxed">
                          &quot;{project.clientReview.quote}&quot;
                        </p>
                        <div className="mt-3 pt-2 border-t border-white/10">
                          <p className="text-xs font-semibold text-white">
                            — {project.clientReview.name}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18181B] via-[#09090B] to-[#18181B] border border-[#D4AF37]/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Planning Interior Work For <span className="gold-gradient-text">Your Mumbai Home?</span>
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
